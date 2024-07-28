import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CoinDataType } from "../redux/slice/CoinDataSlice";

const TopLosers = () => {
  const data = useSelector((state: any) => state.coin);

  const CoinData = data.slice(data.length - 5, data.length);
  return (
    <div className="flex flex-col w-full px-4 py-3">
      <div className="flex flex-row justify-between">
        <span className="text-light-font-primary dark:text-dark-font-primary font-medium">
          Top Losers
        </span>
        <Link to={"/toplosers"}>
          <span className="text-main text-sm font-semibold">
            View more coins
          </span>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="pb-2 border-b-[1px] border-b-dark-font-secondary">
              <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 pr-6 py-3">
                Token
              </th>
              <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
                Current Price
              </th>
              <th className="text-sm font-medium text-dark-font-secondary text-right whitespace-nowrap pb-1 py-3">
                24H Change
              </th>
            </tr>
          </thead>
          <tbody>
            {CoinData &&
              CoinData.map((item: CoinDataType) => {
                const currPrice = item.current_price.toFixed(2);

                const LowPercentage = Math.abs(
                  100 - (item.low_24h * 100) / item.current_price
                ).toFixed(2);
                return (
                  <tr>
                    <td className="flex flex-row gap-x-4 text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap pr-6 py-3">
                      <img
                        src={item.image}
                        alt="logo"
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                      <span>{item.symbol}</span>
                    </td>
                    <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">
                      ${currPrice}
                    </td>
                    <td className="text-[#FF4C4C] whitespace-nowrap text-right py-3">
                      {LowPercentage}%
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopLosers;
