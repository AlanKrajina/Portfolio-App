import React from "react";
import { styles } from "../reduxGameStyles";
import {
  SingleGameState,
  updateCurrentStatistics,
} from "../../../../app/gameSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store";

interface Props {
  gameCopies: SingleGameState[];
  setTimerRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setGameIndex: React.Dispatch<React.SetStateAction<number | null>>;
  gameIndex: number | null;
}

const Games: React.FC<Props> = ({
  gameCopies,
  setTime,
  setTimerRunning,
  setGameIndex,
  gameIndex,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const updateStatistics = (index: number) => {
    const gameCopy = gameCopies.at(index);
    setGameIndex(index);
    dispatch(updateCurrentStatistics(gameCopy));
    setTime(parseInt(gameCopy!.gameStats.timer));
    setTimerRunning(false);
  };

  return (
    <>
      {gameCopies.length > 0 && (
        <div style={{ ...styles.StatisticsDiv, gap: "1rem", display: "flex" }}>
          {gameCopies.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => updateStatistics(index)}
                className="text-gray-800 py-1 px-3 border border-gray-400 rounded shadow text-sm"
                style={
                  gameIndex === index
                    ? { backgroundColor: "#0088FE", color: "#ffffff" }
                    : { backgroundColor: "#ffffff" }
                }
              >
                Game {index + 1}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Games;
