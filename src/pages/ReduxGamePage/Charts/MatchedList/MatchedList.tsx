import React, { useContext } from "react";
import { SingleGameState } from "../../../../app/gameSliceInterfaces";
import { styles } from "../chartStyles";
import { MediaQueryContext } from "../../../../App";

interface Props {
  gameState: SingleGameState;
}

const MachedList: React.FC<Props> = ({ gameState }: Props) => {
  const { isDesktop } = useContext(MediaQueryContext);

  return (
    <>
      {gameState.matchedImages.length > 0 && (
        <div style={styles.MainChartsDiv}>
          <p
            style={
              isDesktop
                ? styles.Title
                : { ...styles.Title, fontSize: "0.8rem", margin: "1rem" }
            }
          >
            List of all matched cards.
          </p>
          <div
            id="section"
            style={
              isDesktop
                ? styles.MatchedListGallery
                : {
                    ...styles.MatchedListGallery,
                    gridTemplateColumns: "repeat(auto-fit, 5rem)",
                  }
            }
          >
            {gameState.matchedImages.map((img) => {
              if (gameState.gameData.find((el) => el.name === img)) {
                const foundImg = gameState.gameData.find(
                  (el) => el.name === img
                );
                return (
                  <img
                    key={foundImg?.id}
                    src={foundImg?.url}
                    style={
                      isDesktop
                        ? styles.MatchedListImage
                        : {
                            ...styles.MatchedListImage,
                            gridTemplateColumns: "repeat(auto-fit, 8em)",
                            width: "5rem",
                            height: "5rem",
                          }
                    }
                    alt={foundImg?.name}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MachedList;
