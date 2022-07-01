import React, { useState } from "react";
import { styles } from "../reduxGameStyles";
import { AppDispatch } from "../../../../app/store";
import Timer from "../StatsComponents/Timer";
import { useDispatch } from "react-redux";
import Games from "../AllGames/Games";
import { SingleGameState } from "../../../../app/gameSlice";

interface DashboardProps {
  getImagesAndResetState: any;
  toggleStatistics: () => void;
  setTimerRunning: React.Dispatch<React.SetStateAction<boolean>>;
  timerRunning: boolean;
  showStatistics: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  time: number;
  gameCopies: SingleGameState[];
}

const ReduxGameDashboard: React.FC<DashboardProps> = ({
  getImagesAndResetState,
  toggleStatistics,
  setTimerRunning,
  timerRunning,
  showStatistics,
  setTime,
  time,
  gameCopies,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [gameIndex, setGameIndex] = useState<number | null>(null);

  const resetGame = () => {
    dispatch(getImagesAndResetState());
    setTimerRunning(false);
    setGameIndex(null);
    setTime(0);
  };

  const checkStatistics = () => {
    toggleStatistics();
    setTimerRunning(false);
  };

  return (
    <div style={styles.DashboardMainDiv}>
      <p style={styles.DashboardP}>Dashboard</p>
      <Timer timerRunning={timerRunning} time={time} setTime={setTime} />
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
        gameCopies={gameCopies}
        setTimerRunning={setTimerRunning}
        setTime={setTime}
        setGameIndex={setGameIndex}
        gameIndex={gameIndex}
      />
    </div>
  );
};

export default ReduxGameDashboard;
