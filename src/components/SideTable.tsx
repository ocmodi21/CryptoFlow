const SideTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
      <thead>
        <tr className="pb-2 border-b-[1px] border-b-dark-font-secondary">
          <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 pr-6 py-3">
            Token
          </th>
          <th className="text-sm font-medium text-dark-font-secondary text-left whitespace-nowrap pb-1 px-6 py-3">
            Last Price
          </th>
          <th className="text-sm font-medium text-dark-font-secondary text-right whitespace-nowrap pb-1 pl-6 py-3">
            24H Change
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap pr-6 py-3">
            hello world
          </td>
          <td className="py-2 text-light-font-primary dark:text-dark-font-primary text-left whitespace-nowrap px-6 py-3">hello</td>
          <td className="py-2 text-light-font-primary dark:text-dark-font-primary text-right whitespace-nowrap pl-6 py-3">hello</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default SideTable;
