import React, { useContext } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
} from "recharts";
import { MediaQueryContext } from "../../../../App";

interface Props {
  matchedImages: string[];
  stepCount: number;
}

const StepsAndMatchesChart: React.FC<Props> = ({
  matchedImages,
  stepCount,
}: Props) => {
  const { isLargeScreen, isDesktop } = useContext(MediaQueryContext);
  const barChartData = [
    {
      Name: "Total",
      Tries: stepCount,
      Matches: matchedImages.length,
    },
  ];

  return (
    <ResponsiveContainer
      width={isLargeScreen ? "20%" : "95%"}
      height={isDesktop ? 350 : 200}
    >
      <BarChart
        data={barChartData}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Name" tickMargin={5} />
        <YAxis tickMargin={5} />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend />
        <Bar dataKey="Tries" stackId="a" fill="rgb(0, 136, 254)" />
        <Bar dataKey="Matches" stackId="a" fill="rgb(72 233 166)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StepsAndMatchesChart;
