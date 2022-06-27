import React, { useEffect } from "react";
import { styles } from "../reduxGameStyles";

interface TimerProps {
  timerRunning: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  time: number;
}

const Timer: React.FC<TimerProps> = ({ timerRunning, setTime, time }) => {
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime: number) => prevTime + 10);
      }, 10);
    } else if (!timerRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, setTime]);

  return (
    <div style={styles.Timer}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
