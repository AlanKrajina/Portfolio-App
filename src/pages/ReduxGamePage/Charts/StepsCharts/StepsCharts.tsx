import React, { useContext } from "react";
import { styles } from "../chartStyles";
import StepsPieChart from "./StepsPieChart";
import StepsBarChart from "./StepsBarChart";
import {
  SingleGameState,
  GameStatsState,
} from "../../../../app/gameSliceInterfaces";
import StepsComposedChart from "./StepsComposedChart";
import { MediaQueryContext } from "../../../../App";

interface Props {
  gameStats: GameStatsState;
  gameState: SingleGameState;
}

const StepsCharts: React.FC<Props> = ({ gameStats, gameState }: Props) => {
  const { isLargeScreen, isDesktop } = useContext(MediaQueryContext);

  return (
    <>
      {gameStats.stepCount > 0 && (
        <div style={styles.MainChartsDiv}>
          <div
            style={
              isDesktop
                ? styles.ThreeChartsDiv
                : {
                    ...styles.ThreeChartsDiv,
                    fontSize: "0.8rem",
                    margin: "2rem 1rem 2rem 1rem",
                  }
            }
          >
            <p>
              First Bar chart shows slowest and fastest turns user made when
              fliping 2 cards, matched or not.
            </p>
            <p>
              Pie chart compares the number of tries (how many times 2 card
              where fliped) and number of wrong matches.
            </p>
            <p>
              Second Bar chart compares the number of tries (how many times 2
              card where fliped) and number of correct matches.
            </p>
          </div>

          <div
            style={
              isLargeScreen
                ? styles.ChartsDiv
                : { ...styles.ChartsDiv, flexDirection: "column", gap: "2rem" }
            }
          >
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
