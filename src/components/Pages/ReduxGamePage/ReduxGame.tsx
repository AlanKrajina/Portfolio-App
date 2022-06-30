import Layout from "../../Layout/LayoutComponent";
import { styles } from "./reduxGameStyles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImagesAndResetState,
  GameMainState,
  imageIsClicked,
  clearSelectedImages,
  updateTimer,
  MemeState,
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
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [disabledCard, setDisableCard] = useState<boolean>(false);
  const [copiedStatistics, setCopiedStatistics] = useState<boolean>(false);

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
        !copiedStatistics
      ) {
        setShowModal(true);
        setTimerRunning(false);
      }
    }
  }, [dispatch, gameState.singleGame, copiedStatistics]);

  const toggleStatistics = () => {
    setShowStatistics((prevState) => !prevState);
  };

  return (
    <Layout>
      <ReduxGameDashboard
        getImagesAndResetState={getImagesAndResetState}
        toggleStatistics={toggleStatistics}
        setTimerRunning={setTimerRunning}
        timerRunning={timerRunning}
        showStatistics={showStatistics}
        time={time}
        setTime={setTime}
        gameCopies={gameState.gameCopies}
        setCopiedStatistics={setCopiedStatistics}
      />
      {showStatistics ? (
        <ReduxGameStatistics />
      ) : (
        <div
          style={{
            ...styles.ImagesGallery,
            marginTop: "3vh",
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
                  setTimerRunning(true);
                  if (!disabledCard) {
                    dispatch(updateTimer(time));
                    dispatch(imageIsClicked(img));
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
          gameState={gameState}
        />
      )}
    </Layout>
  );
};

export default ReduxGame;
