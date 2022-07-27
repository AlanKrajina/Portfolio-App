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
                : { ...styles.Title, fontSize: "1rem", margin: "1rem" }
            }
          >
            List of all matched cards.
          </p>
          <div
            id="section"
            style={{
              ...styles.MatchedListGallery,
              gridTemplateColumns: "repeat(auto-fit, 7rem)",
              margin: "auto",
              width: "77%",
            }}
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
                    style={styles.MatchedListImage}
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
