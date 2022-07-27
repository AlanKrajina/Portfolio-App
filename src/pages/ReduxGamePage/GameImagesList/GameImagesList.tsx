import { styles } from "./gameImagesStyles";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateImagesState,
  appRunning,
  imageClicked,
  clearSelectedImages,
} from "../../../app/gameSlice";
import { GameMainState, MemeState } from "../../../app/gameSliceInterfaces";
import { AppDispatch } from "../../../app/store";
import { MediaQueryContext } from "../../../App";

const GameImagesList: React.FC = () => {
  const { isHalfScreen, isLargeScreen } = useContext(MediaQueryContext);
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
        isHalfScreen
          ? {
              ...styles.GameImagesGallery,
              maxWidth: isLargeScreen ? "80rem" : "62vw",
            }
          : {
              ...styles.GameImagesGallery,
              maxWidth: "85vw",
              gridTemplateColumns: "repeat(auto-fit, 6rem)",
            }
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
              style={
                isHalfScreen
                  ? styles.GameImage
                  : {
                      ...styles.GameImage,
                      height: "7rem",
                    }
              }
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
