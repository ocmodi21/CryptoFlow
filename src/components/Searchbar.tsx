interface SearchTextType {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar = ({ searchText, setSearchText }: SearchTextType) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary !outline-none rounded-md px-3 py-2 text-light-font-primary dark:text-dark-font-primary"
    />
  );
};

export default Searchbar;
