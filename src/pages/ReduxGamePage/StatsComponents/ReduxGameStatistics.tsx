import GameTimeChart from "../Charts/GameTimeChart";
import { styles } from "./statsComponentsStyles";
import MatchedList from "../Charts/MatchedList/MatchedList";
import StepsCharts from "../Charts/StepsCharts/StepsCharts";
import { GameMainState } from "../../../app/gameSlice";
import { useSelector } from "react-redux";
import { memo } from "react";

interface Props {
  isDesktop: boolean;
}

const ReduxGameStatistics: React.FC<Props> = ({ isDesktop }) => {
  const gameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );

  return (
    <div
      style={
        isDesktop
          ? styles.StatisticsMainDiv
          : { ...styles.StatisticsMainDiv, padding: 0 }
      }
    >
      <GameTimeChart gameStats={gameState.gameStats} isDesktop={isDesktop} />
      <StepsCharts
        gameStats={gameState.gameStats}
        gameState={gameState}
        isDesktop={isDesktop}
      />
      <MatchedList gameState={gameState} />
    </div>
  );
};

export default memo(ReduxGameStatistics);
