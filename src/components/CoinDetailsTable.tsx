const CoinDetailsTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
        <thead>
          <tr className="pb-2 border-b-[1px] border-b-dark-font-secondary">
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 pr-6 py-3">
              Name
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              Marketcup
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              Balance
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              Price
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              7D
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              30D
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
              1Y
            </th>
            <th className="text-sm font-medium text-dark-font-secondary text-right whitespace-nowrap pb-1 pl-6 py-3">
              Today
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap pr-6 py-3">
              hello world
            </td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
            <td className="text-light-font-primary dark:text-dark-font-primary text-right whitespace-nowrap pl-6 py-3">hello</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  };
  
export default CoinDetailsTable;


//img, symbol, name, marketcap, currprice, hight24h, low 24h, 