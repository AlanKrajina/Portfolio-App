import React, { useContext } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GameTimeState } from "../../../../app/gameSliceInterfaces";
import { MediaQueryContext } from "../../../../App";

interface Props {
  gameTimes: GameTimeState[];
}

const StepsComposedChart: React.FC<Props> = ({ gameTimes }: Props) => {
  const { isLargeScreen, isDesktop } = useContext(MediaQueryContext);
  const gameTimesSorted = gameTimes
    .map((el) => (parseInt(el.end) - parseInt(el.start)) / 1000)
    .sort((a, b) => b - a);

  const data = [
    {
      name: "Slowest",
      time: gameTimesSorted.at(0),
      progress: gameTimesSorted.at(0),
    },
    {
      name: "Fastest",
      time: gameTimesSorted.at(-1),
      progress: gameTimesSorted.at(-1),
    },
  ];

  return (
    <ResponsiveContainer
      width={isLargeScreen ? "20%" : "95%"}
      height={isDesktop ? 350 : 200}
    >
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" tickMargin={5} />
        <YAxis tickMargin={5} />
        <Tooltip />
        <Legend />
        <Bar dataKey="time" barSize={20} fill="#0088FE" />
        <Line type="monotone" dataKey="progress" stroke="#08fdd8" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default StepsComposedChart;
