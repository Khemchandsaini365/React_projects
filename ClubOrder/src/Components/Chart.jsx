import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4500];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2354];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page k",
  "Page H",
];

function Chart() {
  return (
    <LineChart
      width={800}
      height={400}
      series={[
        { data: pData, label: "pv" },
        { data: uData, label: "uv" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}

export default Chart;
