import { styles } from "../../reduxGameStyles";
import StepsPieChart from "./StepsPieChart";
import StepsBarChart from "./StepsBarChart";
import { ImagesState, UserStatsState } from "../../../../../app/imagesSlice";
import StepsComposedChart from "./StepsComposedChart";

interface Props {
  gameStats: UserStatsState;
  gameState: ImagesState;
}

const StepsCharts: React.FC<Props> = ({ gameStats, gameState }: Props) => {
  return (
    <>
      {gameStats.stepCount > 0 && (
        <div style={styles.StatisticsDiv}>
          <p style={styles.Title}>
            Pie Chart and Bar Chart show the number of tries (how many times 2
            card where fliped) and number of wrong (Pie Chart) or correct (Bar
            Chart) matches when 2 cards are the different or same.
          </p>
          <div style={styles.ChartsDiv}>
            <StepsComposedChart gameTimes={gameStats.gameTimes} />
            <StepsPieChart
              wrongMatches={gameState.gameStats.wrongMatches}
              stepCount={gameState.gameStats.stepCount}
            />
            <StepsBarChart
              matchedImages={gameState.matchedImages}
              stepCount={gameState.gameStats.stepCount}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StepsCharts;
