import React, { useContext } from "react";
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
import { GameStatsState } from "../../../app/gameSlice";
import { styles } from "./chartStyles";
import { MediaQueryContext } from "../../../App";

interface Props {
  gameStats: GameStatsState;
}

const GameTimeChart: React.FC<Props> = ({ gameStats }: Props) => {
  const { isDesktop } = useContext(MediaQueryContext);
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
        <div style={styles.MainChartsDiv}>
          <p style={styles.Title}>
            Chart shows all turns and times it takes when 2 cards get fliped,
            matched or not. Bars represent summed time for 2 cards, which gets
            calculated in to a single turn with the time passed in seconds.
          </p>
          <div style={styles.GameChartDiv}>
            <ResponsiveContainer
              width={isDesktop ? "85%" : "100%"}
              height={350}
            >
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
