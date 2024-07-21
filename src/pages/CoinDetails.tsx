import axios from "axios";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import CoinDataGraph from "../components/CoinDataGraph";

const CoinDetails = () => {
  const { state } = useLocation();
  const currPrice = state.item.current_price.toFixed(2);
  const HighPercentage = Math.abs(
    100 - (state.item.high_24h * 100) / state.item.current_price
  ).toFixed(2);

  const { data } = useQuery({
    queryKey: [""],
    queryFn: () => fetchData("market_chart", "usd", 1),
    // staleTime: 45 * 1000,
  });

  const fetchData = (endpoint: string, currency: string, days: number) => {
    return axios.get(
      `${import.meta.env.VITE_BASE_URL}/${state.item.id}/${endpoint}`,
      {
        params: {
          x_cg_demo_api_key: import.meta.env.VITE_API_KEY,
          vs_currency: currency,
          days: days,
        },
      }
    );
  };

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center w-10 h-10 bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md mb-3">
          <img
            src={state.item.image}
            alt="logo"
            width={27}
            height={27}
            className="rounded-full"
          />
        </div>
        <span className="text-md font-medium text-dark-font-secondary whitespace-nowrap">
          {state.item.name}
        </span>
        <div className="flex flex-row gap-x-3 my-2">
          <span className="text-light-font-primary dark:text-dark-font-primary text-xl font-semibold">
            ${currPrice}
          </span>
          <span className="flex flex-row gap-x-1 items-center px-2 py-[1px] text-sm text-[#548b3f] bg-[#c3e6b6] rounded-md">
            <FaArrowUp />
            {HighPercentage}%
          </span>
        </div>
      </div>
      <div className="h-96 w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md pr-4 py-5">
        <CoinDataGraph />
      </div>
    </div>
  );
};

export default CoinDetails;
