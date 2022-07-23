import { styles } from "./gameImagesStyles";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GameMainState,
  updateImagesState,
  MemeState,
  appRunning,
  imageClicked,
  clearSelectedImages,
} from "../../../app/gameSlice";
import { AppDispatch } from "../../../app/store";
import { MediaQueryContext } from "../../../App";

const GameImagesList: React.FC = () => {
  const isDesktop = useContext(MediaQueryContext);
  const dispatch = useDispatch<AppDispatch>();
  const gameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );
  const [disabledCard, setDisableCard] = useState<boolean>(false);

  useEffect(() => {
    if (gameState.selectedImages.length === 2) {
      setDisableCard(true);
      setTimeout(function () {
        dispatch(clearSelectedImages());
        setDisableCard(false);
      }, 800);
    }
  }, [dispatch, gameState.selectedImages.length]);

  const imageClickHandler = (img: MemeState): void => {
    if (!gameState.gameConditionals.isAppRunning) {
      dispatch(appRunning(true));
    }

    if (!disabledCard) {
      dispatch(updateImagesState(img));
      dispatch(imageClicked(true));
    }
  };

  return (
    <div
      style={
        isDesktop
          ? styles.GameImagesGallery
          : { ...styles.GameImagesGallery, maxWidth: "85vw" }
      }
    >
      {gameState.gameData.map((img: MemeState) => {
        return (
          <figure
            style={{
              overflow: "hidden",
            }}
            key={img.id}
          >
            <img
              key={img.id}
              src={img.selected ? img.url : img.urlBack}
              style={styles.GameImage}
              alt={img.name}
              className={img.selected ? "" : "gameImageEffect"}
              onClick={() => imageClickHandler(img)}
            />
          </figure>
        );
      })}
    </div>
  );
};

export default React.memo(GameImagesList);
