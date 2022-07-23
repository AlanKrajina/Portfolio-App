import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MediaQueryContext } from "../../../../App";

interface Props {
  wrongMatches: number;
  stepCount: number;
}

const COLORS = ["#0088FE", "rgb(251 101 121)"];
const RADIAN = Math.PI / 180;

const StepsPieChart: React.FC<Props> = ({ wrongMatches, stepCount }: Props) => {
  const isDesktop = useContext(MediaQueryContext);
  const pieChartData = [
    { name: "Tries", value: stepCount },
    { name: "Wrong matches", value: wrongMatches },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 1;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${pieChartData[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width={isDesktop ? "25%" : "100%"} height={350}>
      <PieChart>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StepsPieChart;
