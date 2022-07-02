import Layout from "../../Layout/LayoutComponent";
import { styles } from "./reduxGameStyles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImagesAndResetState,
  GameMainState,
  updateImagesState,
  clearSelectedImages,
  MemeState,
  appRunning,
  imageClicked,
} from "../../../app/gameSlice";
import { AppDispatch } from "../../../app/store";
import ReduxGameDashboard from "./Dashboard/ReduxGameDashboard";
import ReduxGameStatistics from "./StatsComponents/ReduxGameStatistics";
import GameOverModal from "./GameModal/GameOverModal";

const ReduxGame: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gameState = useSelector((state: GameMainState) => state.game);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [disabledCard, setDisableCard] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getImagesAndResetState());
  }, [dispatch]);

  useEffect(() => {
    if (gameState.singleGame.selectedImages.length === 2) {
      setDisableCard(true);
      setTimeout(function () {
        dispatch(clearSelectedImages());
        setDisableCard(false);
      }, 1000);

      if (
        gameState.singleGame.matchedImages.length ===
          gameState.singleGame.gameData.length / 2 &&
        !gameState.singleGame.gameConditionals.isCopy
      ) {
        setShowModal(true);
        dispatch(appRunning(false));
      }
    }
  }, [dispatch, gameState.singleGame]);

  const toggleStatistics = () => {
    setShowStatistics((prevState) => !prevState);
  };

  return (
    <Layout>
      <ReduxGameDashboard
        getImagesAndResetState={getImagesAndResetState}
        toggleStatistics={toggleStatistics}
        showStatistics={showStatistics}
      />
      {showStatistics ? (
        <ReduxGameStatistics />
      ) : (
        <div
          style={{
            ...styles.ImagesGallery,
            marginTop: "4vh",
            maxWidth: "80rem",
          }}
        >
          {gameState.singleGame.gameData.map((img: MemeState) => {
            return (
              <img
                key={img.id}
                src={img.selected ? img.url : img.urlBack}
                style={styles.Image}
                alt={img.name}
                className={img.selected ? "" : "gameImageEffect"}
                onClick={() => {
                  if (!gameState.singleGame.gameConditionals.isAppRunning) {
                    dispatch(appRunning(true));
                  }

                  if (!disabledCard) {
                    dispatch(updateImagesState(img));
                    dispatch(imageClicked(true));
                  }
                }}
              />
            );
          })}
        </div>
      )}

      {showModal && (
        <GameOverModal
          setShowModal={setShowModal}
          toggleStatistics={toggleStatistics}
        />
      )}
    </Layout>
  );
};

export default ReduxGame;
