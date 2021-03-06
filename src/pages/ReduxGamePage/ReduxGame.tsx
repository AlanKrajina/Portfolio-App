import Layout from "../../layouts/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImagesAndResetState,
  unmountGameComponent,
} from "../../app/gameSlice";
import { GameMainState } from "../../app/gameSliceInterfaces";

import { AppDispatch } from "../../app/store";
import ReduxGameDashboard from "./Dashboard/ReduxGameDashboard";
import ReduxGameStatistics from "./StatsComponents/ReduxGameStatistics";
import GameOverModal from "../../components/GameModal/GameOverModal";
import GameImagesList from "./GameImagesList/GameImagesList";

const ReduxGame: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getImagesAndResetState());
    return () => {
      dispatch(unmountGameComponent());
    };
  }, [dispatch]);

  useEffect(() => {
    if (
      gameState.selectedImages.length === 2 &&
      gameState.matchedImages.length === gameState.gameData.length / 2 &&
      !gameState.gameConditionals.isCopy
    ) {
      setShowModal(true);
    }
  }, [gameState]);

  return (
    <Layout headerStyle={undefined} headerId="" headerTitle="">
      <ReduxGameDashboard
        getImagesAndResetState={getImagesAndResetState}
        setShowStatistics={setShowStatistics}
        showStatistics={showStatistics}
      />
      {showStatistics ? <ReduxGameStatistics /> : <GameImagesList />}

      {showModal && (
        <GameOverModal
          setShowModal={setShowModal}
          setShowStatistics={setShowStatistics}
        />
      )}
    </Layout>
  );
};

export default ReduxGame;
