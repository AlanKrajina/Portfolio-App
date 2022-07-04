import React from "react";
import { styles } from "../reduxGameStyles";
import {
  GameMainState,
  updateCurrentStatistics,
  appRunning,
} from "../../../../app/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../app/store";

interface Props {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setGameIndex: React.Dispatch<React.SetStateAction<number | null>>;
  gameIndex: number | null;
}

const Games: React.FC<Props> = ({ setTime, setGameIndex, gameIndex }) => {
  const dispatch = useDispatch<AppDispatch>();
  const gameCopies = useSelector(
    (state: GameMainState) => state.game.gameCopies
  );

  const updateStatistics = (index: number): void => {
    const gameCopy = gameCopies.at(index);
    const time = gameCopy?.gameStats.gameTimes.at(-1)?.end;
    setGameIndex(index);
    dispatch(updateCurrentStatistics(gameCopy));
    setTime(parseInt(time!));
    dispatch(appRunning(false));
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
