import { styles } from "./gameImagesStyles";
import React, { useEffect, useState } from "react";
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

const GameImagesList: React.FC = () => {
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
      }, 1000);
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
    <div style={styles.GameImagesGallery}>
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
