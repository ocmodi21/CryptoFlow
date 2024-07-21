import { useInfiniteQuery } from "react-query";
import axios from "axios";
import ExploreDetailsTable from "../components/ExploreDetailsTable";

const Explore = () => {
  const fetchData = (
    endpoint: string,
    currency: string,
    per_page: number,
    page: number
  ) => {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, {
      params: {
        x_cg_demo_api_key: import.meta.env.VITE_API_KEY,
        vs_currency: currency,
        per_page: per_page,
        page: page,
      },
    });
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["coins"],
      ({ pageParam = 1 }) => fetchData("markets", "usd", 20, pageParam),
      {
        getNextPageParam: (_lastPage, pages) => {
          if (pages.length < 14) {
            return pages.length + 1;
          } else {
            return undefined;
          }
        },
      }
    );

  return (
    <div className="flex flex-col w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md px-4 py-3">
      <div className="mb-3">
        <span className="text-lg text-light-font-primary dark:text-dark-font-primary font-medium">
          Explore more coin
        </span>
      </div>
      <ExploreDetailsTable CoinData={data} />
      {hasNextPage && (
        <div className="flex justify-end mt-2">
          <span
            onClick={() => fetchNextPage()}
            className="text-main cursor-pointer"
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Explore;
