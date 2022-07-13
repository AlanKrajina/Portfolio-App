import React, { useState } from "react";
import { styles } from "./reduxGameDashboardStyles";
import { AppDispatch } from "../../../app/store";
import Timer from "../../../components/GameTimer/Timer";
import { useDispatch } from "react-redux";
import Games from "../AllGames/Games";
import { appRunning } from "../../../app/gameSlice";

interface DashboardProps {
  getImagesAndResetState: any;
  setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
  showStatistics: boolean;
}

const ReduxGameDashboard: React.FC<DashboardProps> = ({
  getImagesAndResetState,
  setShowStatistics,
  showStatistics,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [gameIndex, setGameIndex] = useState<number | null>(null);
  const [time, setTime] = useState<number>(0);

  const resetGame = (): void => {
    dispatch(getImagesAndResetState());
    dispatch(appRunning(false));
    setGameIndex(null);
    setTime(0);
  };

  const checkStatistics = (): void => {
    setShowStatistics((prevState) => !prevState);
    dispatch(appRunning(false));
  };

  return (
    <div style={styles.DashboardMainDiv}>
      <p style={styles.DashboardTitle}>Dashboard</p>
      <Timer time={time} setTime={setTime} />
      <div style={styles.DashboardButtonsDiv}>
        <button
          className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={resetGame}
        >
          Reset Game
        </button>
        <button
          className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={checkStatistics}
        >
          {showStatistics ? "Close" : "Show"} Statistics
        </button>
      </div>
      <Games
        setTime={setTime}
        setGameIndex={setGameIndex}
        gameIndex={gameIndex}
      />
    </div>
  );
};

export default React.memo(ReduxGameDashboard);
