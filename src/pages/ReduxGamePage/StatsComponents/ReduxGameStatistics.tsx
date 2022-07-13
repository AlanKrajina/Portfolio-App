import GameTimeChart from "../Charts/GameTimeChart";
import { styles } from "./statsComponentsStyles";
import MatchedList from "../Charts/MatchedList/MatchedList";
import StepsCharts from "../Charts/StepsCharts/StepsCharts";
import { GameMainState } from "../../../app/gameSlice";
import { useSelector } from "react-redux";
import { memo } from "react";

const ReduxGameStatistics: React.FC = () => {
  const gameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );

  return (
    <div style={styles.StatisticsMainDiv}>
      <GameTimeChart gameStats={gameState.gameStats} />
      <StepsCharts gameStats={gameState.gameStats} gameState={gameState} />
      <MatchedList gameState={gameState} />
    </div>
  );
};

export default memo(ReduxGameStatistics);
