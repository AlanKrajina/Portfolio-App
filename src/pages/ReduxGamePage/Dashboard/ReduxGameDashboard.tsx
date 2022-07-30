import React, { useState, useContext } from "react";
import { styles } from "./reduxGameDashboardStyles";
import { AppDispatch } from "../../../app/store";
import Timer from "../../../components/GameTimer/Timer";
import { useDispatch } from "react-redux";
import Games from "../AllGames/Games";
import { appRunning } from "../../../app/gameSlice";
import { MediaQueryContext } from "../../../App";
import Button from "../../../components/SharedButton/Button";

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
  const { isHalfScreen } = useContext(MediaQueryContext);

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
      <p
        style={
          isHalfScreen
            ? styles.DashboardTitle
            : {
                ...styles.DashboardTitle,
                fontSize: "2.5rem",
              }
        }
      >
        Dashboard
      </p>
      <Timer time={time} setTime={setTime} />
      <div style={styles.DashboardButtonsDiv}>
        <Button
          buttonFunction={resetGame}
          buttonTitle={"Reset Game"}
          styling={
            "shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          }
        />
        <Button
          buttonFunction={checkStatistics}
          buttonTitle={showStatistics ? "Close Statistics" : "Show Statistics"}
          styling={
            "shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          }
        />
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
