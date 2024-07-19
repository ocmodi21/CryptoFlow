const SideTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="pb-2 border-b-[1px] border-b-dark-font-secondary">
          <th className="text-sm font-medium text-dark-font-secondary text-left pb-1">
            Token
          </th>
          <th className="text-sm font-medium text-dark-font-secondary text-left px-2 pb-1">
            Last Price
          </th>
          <th className="text-sm font-medium text-dark-font-secondary text-right pb-1">
            24H Change
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 text-light-font-primary dark:text-dark-font-primary">
            hello world
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default SideTable;
