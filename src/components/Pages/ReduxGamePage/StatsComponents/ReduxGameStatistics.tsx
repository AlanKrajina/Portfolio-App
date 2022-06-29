import GameTimeChart from "../Charts/GameTimeChart";
import { styles } from "../reduxGameStyles";
import MatchedList from "../Charts/MatchedList";
import StepsCharts from "../Charts/StepsCharts/StepsCharts";
import { ImagesMainState } from "../../../../app/imagesSlice";
import { useSelector } from "react-redux";

const ReduxGameStatistics: React.FC = () => {
  const gameState = useSelector((state: ImagesMainState) => state.gameState);

  return (
    <div style={styles.StatisticsMainDiv}>
      <GameTimeChart gameStats={gameState.gameStats} />
      <StepsCharts gameStats={gameState.gameStats} gameState={gameState} />
      <MatchedList gameState={gameState} />
    </div>
  );
};

export default ReduxGameStatistics;
