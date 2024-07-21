import { CoinDataType } from "../redux/slice/CoinDataSlice";

interface ExploreDataType {
  CoinData: any;
}

const ExploreDetailsTable = ({ CoinData }: ExploreDataType) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="pb-2 border-b-[1px] border-b-dark-font-secondary">
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 pr-6 py-3">
              Name
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              Current Price
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              {"24H High(%)"}
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              {"24H Low(%)"}
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              ATH
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-right whitespace-nowrap pb-1 pl-6 py-3">
              Marketcap
            </th>
          </tr>
        </thead>
        <tbody>
          {CoinData &&
            CoinData.pages.map((page: any) =>
              page.data.map((item: CoinDataType) => {
                const currPrice = item.current_price.toFixed(2);

                const HighPercentage = Math.abs(
                  100 - (item.high_24h * 100) / item.current_price
                ).toFixed(2);
                const LowPercentage = Math.abs(
                  100 - (item.low_24h * 100) / item.current_price
                ).toFixed(2);

                const ath = item.ath.toFixed(2);

                const MarketCap =
                  (item.market_cap >= 1000000000 &&
                    `$${(item.market_cap / 1000000000).toFixed(2)}B`) ||
                  (item.market_cap >= 1000000 &&
                    `$${(item.market_cap / 1000000).toFixed(2)}M`) ||
                  (item.market_cap >= 1000 &&
                    `$${(item.market_cap / 1000).toFixed(2)}K`) ||
                  `$${item.market_cap.toFixed(2)}`;

                return (
                  <tr key={item.market_cap_rank}>
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
                    <td className="text-[#88D66C] text-left whitespace-nowrap px-6 py-3">
                      {HighPercentage}%
                    </td>
                    <td className="text-[#FF4C4C] text-left whitespace-nowrap px-6 py-3">
                      {LowPercentage}%
                    </td>
                    <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">
                      ${ath}
                    </td>
                    <td className="text-light-font-primary dark:text-dark-font-primary text-right whitespace-nowrap pl-6 py-3">
                      {MarketCap}
                    </td>
                  </tr>
                );
              })
            )}
        </tbody>
      </table>
    </div>
  );
};

export default ExploreDetailsTable;