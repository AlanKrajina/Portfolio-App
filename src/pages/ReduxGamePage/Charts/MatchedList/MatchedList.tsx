import { SingleGameState } from "../../../../app/gameSlice";
import { styles } from "../chartStyles";

interface Props {
  gameState: SingleGameState;
}

const MachedList: React.FC<Props> = ({ gameState }: Props) => {
  return (
    <>
      {gameState.matchedImages.length > 0 && (
        <div style={styles.MainChartsDiv}>
          <p style={styles.Title}>List of all matched cards.</p>
          <div
            id="section"
            style={{
              ...styles.MatchedListGallery,
              gridTemplateColumns: "repeat(auto-fit, 9rem)",
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
