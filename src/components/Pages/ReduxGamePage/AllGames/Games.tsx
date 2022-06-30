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
  setCopiedStatistics: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Games: React.FC<Props> = ({
  gameCopies,
  setCopiedStatistics,
  setTime,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const updateStatistics = (index: number) => {
    const copies = gameCopies.at(index);
    dispatch(updateCurrentStatistics(copies));
    setCopiedStatistics(true);
    setTime(0);
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
                className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-3 border border-gray-400 rounded shadow text-sm"
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
