import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    btc: 4000,
    eth: 2400,
    sol: 2100,
    amt: 2400,
  },
  {
    name: "Page B",
    btc: 3000,
    eth: 1398,
    sol: 1780,
    amt: 2210,
  },
  {
    name: "Page C",
    btc: 2000,
    eth: 9800,
    sol: 2570,
    amt: 2290,
  },
  {
    name: "Page D",
    btc: 2780,
    eth: 3908,
    sol: 1290,
    amt: 2000,
  },
  {
    name: "Page E",
    btc: 1890,
    eth: 4800,
    sol: 2740,
    amt: 2181,
  },
  {
    name: "Page F",
    btc: 2390,
    eth: 3800,
    sol: 2000,
    amt: 2500,
  },
  {
    name: "Page G",
    btc: 3490,
    eth: 4300,
    sol: 1460,
    amt: 2100,
  },
];

const GlobalGraph = () => {
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
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="eth" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="btc" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="sol" stroke="#E90074" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GlobalGraph;
