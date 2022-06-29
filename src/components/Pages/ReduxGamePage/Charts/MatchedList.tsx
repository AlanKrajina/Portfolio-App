import { ImagesState } from "../../../../app/imagesSlice";
import { styles } from "../reduxGameStyles";

interface Props {
  gameState: ImagesState;
}

const MachedList: React.FC<Props> = ({ gameState }: Props) => {
  return (
    <>
      {gameState.matchedImages.length > 0 && (
        <div style={styles.StatisticsDiv}>
          <p style={styles.Title}>List of all matched cards.</p>
          <div
            id="section"
            style={{
              ...styles.ImagesGallery,
              gridTemplateColumns: "repeat(auto-fit, 9rem)",
              margin: "auto",
            }}
          >
            {gameState.matchedImages.map((img) => {
              if (gameState.imagesData.find((el) => el.name === img)) {
                const foundImg = gameState.imagesData.find(
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
