import React from "react";
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

interface Props {
  matchedImages: string[];
  stepCount: number;
  isDesktop: boolean;
}

const StepsAndMatchesChart: React.FC<Props> = ({
  matchedImages,
  stepCount,
  isDesktop,
}: Props) => {
  const barChartData = [
    {
      Name: "Total",
      Tries: stepCount,
      Matches: matchedImages.length,
    },
  ];

  return (
    <ResponsiveContainer width={isDesktop ? "20%" : "100%"} height={350}>
      <BarChart
        data={barChartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
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
