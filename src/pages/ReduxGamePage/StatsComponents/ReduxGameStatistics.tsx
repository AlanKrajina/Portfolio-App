import React, { useContext } from "react";
import GameTimeChart from "../Charts/GameTimeChart";
import { styles } from "./statsComponentsStyles";
import MatchedList from "../Charts/MatchedList/MatchedList";
import StepsCharts from "../Charts/StepsCharts/StepsCharts";
import { GameMainState } from "../../../app/gameSliceInterfaces";
import { useSelector } from "react-redux";
import { memo } from "react";
import { MediaQueryContext } from "../../../App";

const ReduxGameStatistics: React.FC = () => {
  const { isDesktop } = useContext(MediaQueryContext);
  const gameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );

  return (
    <div
      style={
        isDesktop
          ? styles.StatisticsMainDiv
          : { ...styles.StatisticsMainDiv, padding: "1.5rem 0 0 0 " }
      }
    >
      <GameTimeChart gameStats={gameState.gameStats} />
      <StepsCharts gameStats={gameState.gameStats} gameState={gameState} />
      <MatchedList gameState={gameState} />
    </div>
  );
};

export default memo(ReduxGameStatistics);
