import React, { useEffect } from "react";
import { styles } from "../../pages/ReduxGamePage/StatsComponents/statsComponentsStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  GameMainState,
  imageClicked,
  updateGameTimes,
} from "../../app/gameSlice";
import { AppDispatch } from "../../app/store";

interface TimerProps {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  time: number;
}

const Timer: React.FC<TimerProps> = ({ setTime, time }) => {
  const dispatch = useDispatch<AppDispatch>();

  const gameState = useSelector(
    (state: GameMainState) => state.game.singleGame
  );

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (gameState.gameConditionals.isAppRunning) {
      interval = setInterval(() => {
        setTime((prevTime: number) => prevTime + 10);
      }, 10);
    } else if (!gameState.gameConditionals.isAppRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameState.gameConditionals.isAppRunning, setTime]);

  useEffect(() => {
    if (gameState.gameConditionals.isImageClicked) {
      dispatch(updateGameTimes(time));
      dispatch(imageClicked(false));
    }
  }, [dispatch, gameState.gameConditionals.isImageClicked, time]);

  return (
    <div style={styles.Timer}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default React.memo(Timer);
