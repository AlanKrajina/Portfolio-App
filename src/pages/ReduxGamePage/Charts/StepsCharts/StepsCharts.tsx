import { styles } from "../chartStyles";
import StepsPieChart from "./StepsPieChart";
import StepsBarChart from "./StepsBarChart";
import { SingleGameState, GameStatsState } from "../../../../app/gameSlice";
import StepsComposedChart from "./StepsComposedChart";

interface Props {
  gameStats: GameStatsState;
  gameState: SingleGameState;
  isDesktop: boolean;
}

const StepsCharts: React.FC<Props> = ({
  gameStats,
  gameState,
  isDesktop,
}: Props) => {
  return (
    <>
      {gameStats.stepCount > 0 && (
        <div style={styles.MainChartsDiv}>
          <div style={styles.ThreeChartsDiv}>
            <p style={styles.ThreeChartsTitle}>
              First Bar chart shows slowest and fastest turns user made when
              fliping 2 cards, matched or not.
            </p>
            <p style={styles.ThreeChartsTitle}>
              Pie chart compares the number of tries (how many times 2 card
              where fliped) and number of wrong matches.
            </p>
            <p style={styles.ThreeChartsTitle}>
              Second Bar chart compares the number of tries (how many times 2
              card where fliped) and number of correct matches.
            </p>
          </div>

          <div
            style={
              isDesktop
                ? styles.ChartsDiv
                : { ...styles.ChartsDiv, flexDirection: "column" }
            }
          >
            <StepsComposedChart
              gameTimes={gameStats.gameTimes}
              isDesktop={isDesktop}
            />
            <StepsPieChart
              wrongMatches={gameState.gameStats.wrongMatches}
              stepCount={gameState.gameStats.stepCount}
              isDesktop={isDesktop}
            />
            <StepsBarChart
              matchedImages={gameState.matchedImages}
              stepCount={gameState.gameStats.stepCount}
              isDesktop={isDesktop}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StepsCharts;
