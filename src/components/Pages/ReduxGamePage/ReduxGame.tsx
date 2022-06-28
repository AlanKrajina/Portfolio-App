import Layout from "../../Layout/LayoutComponent";
import { styles } from "./reduxGameStyles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImagesAndResetState,
  ImagesMainState,
  imageIsClicked,
  clearSelectedImages,
  updateTimer,
} from "../../../app/imagesSlice";
import { AppDispatch } from "../../../app/store";
import ReduxGameDashboard from "./ReduxGameDashboard";
import ReduxGameStatistics from "./ReduxGameStatistics";
import GameOverModal from "./GameModal/GameOverModal";

const ReduxGame: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const imagesResponse = useSelector(
    (state: ImagesMainState) => state.gameState
  );
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [disabledCard, setDisableCard] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getImagesAndResetState());
  }, [dispatch]);

  useEffect(() => {
    if (imagesResponse.selectedImages.length === 2) {
      setDisableCard(true);
      setTimeout(function () {
        dispatch(clearSelectedImages());
        setDisableCard(false);
      }, 1000);

      if (
        imagesResponse.matchedImages.length ===
        imagesResponse.imagesData.length / 2
      ) {
        setShowModal(true);
        setTimerRunning(false);
      }
    }
  }, [dispatch, imagesResponse]);

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
      />
      {showStatistics ? (
        <ReduxGameStatistics />
      ) : (
        <div id="section" style={styles.ImagesGallery}>
          {imagesResponse.imagesData.map((img) => {
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
        />
      )}
    </Layout>
  );
};

export default ReduxGame;
