import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GameStatsState } from "../../../../app/gameSlice";
import { styles } from "../reduxGameStyles";

interface Props {
  gameStats: GameStatsState;
}

const GameTimeChart: React.FC<Props> = ({ gameStats }: Props) => {
  const gameTimes = gameStats.gameTimes.map(
    (el: { end: string; start: string }, index: number) => {
      const secondsConverted = parseInt(el.end) - parseInt(el.start);
      return {
        name: `Turn ${index + 1}`,
        time: secondsConverted / 1000,
      };
    }
  );

  return (
    <>
      {gameStats.stepCount > 0 && (
        <div style={styles.StatisticsDiv}>
          <p style={styles.Title}>
            Chart shows all turns when 2 cards got fliped, matched or not. Bars
            represent time it takes when first card got fliped and then the
            second, which gets calculated in to a single turn with the time
            passed.
          </p>
          <div style={styles.GameChartDiv}>
            <ResponsiveContainer width="85%" height={350}>
              <BarChart
                data={gameTimes}
                margin={{
                  top: 0,
                  right: 20,
                  left: 20,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickMargin={5} />
                <YAxis
                  label={{
                    value: "sec",
                    fill: "#08fdd8",
                    position: { x: 5, y: 152 },
                  }}
                  tickMargin={5}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <Bar dataKey="time" fill="#08fdd8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default GameTimeChart;
