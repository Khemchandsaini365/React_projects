import React, { useEffect } from "react";
import SubHeader from "./SubHeader";
import { BsArrowUp } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  BarChart,
  Bar,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

// Sample data for the charts
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChart2 = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={data2}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="border border-secondary py-2"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Reusable Chart component
const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className="border border-secondary py-2"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" includeHidden="true">
          <Label
            value="Pages of my website"
            offset={-3}
            position="insideBottom"
          />
        </XAxis>
        <YAxis
          label={{ value: "pv of page", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Reusable Dashboard component
const ReUsableDashboard = () => {
  return (
    <>
      <div className="main  p-3">
        <div className="row justify-content-center gap-3 px-3 w-100">
          {/* Box 1 */}
          <div
            className="box card col-12 col-sm-6  p-3 d-flex flex-column justify-content-between"
            style={{ width: "400px" }}
          >
            <p style={{ fontSize: "1.5rem" }}>Daily Visit</p>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "1.3rem" }}
            >
              <div>
                <BsArrowUp style={{ color: "green", fontSize: "30px" }} /> 14579
              </div>
              <p>70%</p>
            </div>
            <progress value={70} max={100} style={{ width: "100%" }} />
          </div>

          {/* Box 2 */}
          <div
            className="box card col-11 col-sm-6  p-3 d-flex flex-column justify-content-between"
            style={{ width: "400px" }}
          >
            <p style={{ fontSize: "1.5rem" }}>Bounce Rate</p>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "1.3rem" }}
            >
              <div>
                <BsArrowUp style={{ color: "green", fontSize: "30px" }} /> 20859
              </div>
              <p>65%</p>
            </div>
            <progress value={65} max={100} style={{ width: "100%" }} />
          </div>

          {/* Box 3 */}
          <div
            className="box card col-11 col-sm-6  p-3 d-flex flex-column justify-content-between"
            style={{ width: "400px" }}
          >
            <p style={{ fontSize: "1.5rem" }}>Growth Rate</p>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "1.3rem" }}
            >
              <div>
                <BsArrowUp style={{ color: "green", fontSize: "30px" }} /> 15246
              </div>
              <p>80%</p>
            </div>
            <progress value={80} max={100} style={{ width: "100%" }} />
          </div>

          {/* Box 4 */}
          <div
            className="box card col-11 col-sm-6  p-3 d-flex flex-column justify-content-between"
            style={{ width: "400px" }}
          >
            <p style={{ fontSize: "1.5rem" }}>Page Views</p>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "1.3rem" }}
            >
              <div>
                <BsArrowUp style={{ color: "green", fontSize: "30px" }} /> 24516
              </div>
              <p>60%</p>
            </div>
            <progress value={60} max={100} style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="charts d-flex justify-content-center gap-3 flex-wrap p-2">
        {/* <div className="" style={{ width: "800px" }}>
          <Chart />
        </div>
        <div className="" style={{ width: "800px" }}>
          <Chart />
        </div> */}
        <div className="" style={{ width: "1620px" }}>
          <BarChart2 />
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <SubHeader Name={"Dashboard"} hidebtn={true} />
      <ReUsableDashboard />
    </>
  );
};

export { ReUsableDashboard };
export default Dashboard;
