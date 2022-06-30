import React from "react";
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
  setCopiedStatistics: React.Dispatch<React.SetStateAction<boolean>>;
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
  setCopiedStatistics,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const resetGame = () => {
    dispatch(getImagesAndResetState());
    setTimerRunning(false);
    setTime(0);
    setCopiedStatistics(false);
  };

  const checkStatistics = () => {
    toggleStatistics();
    setTimerRunning(false);
  };

  return (
    <div style={styles.DashboardMainDiv}>
      <p style={styles.DashboardP}>Dashboard</p>
      {!showStatistics && (
        <Timer timerRunning={timerRunning} time={time} setTime={setTime} />
      )}
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
        setCopiedStatistics={setCopiedStatistics}
        setTime={setTime}
      />
    </div>
  );
};

export default ReduxGameDashboard;
