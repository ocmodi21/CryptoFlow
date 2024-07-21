import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    uv: 2200,
    amt: 2400,
  },
  {
    name: "Tuesday",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Wednesday",
    uv: 1200,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 1890,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 2390,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 3490,
    amt: 2100,
  },
];

const CoinDataGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CoinDataGraph;
