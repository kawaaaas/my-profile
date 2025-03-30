import { CareerContentsType } from "@/types/types";
import useSWR, { Fetcher } from "swr";

type UseFetchCareer = {
  career: CareerContentsType[] | undefined;
  fetchCareerLoading: boolean;
  fetchCareerError: Error;
  fetchCareerMutate: () => Promise<void | CareerContentsType[] | undefined>;
};

const fetcher: Fetcher<CareerContentsType[], string> = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data as CareerContentsType[];
};

const useFetchCareer = (): UseFetchCareer => {
  const url = "/text/career.json";

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    career: data,
    fetchCareerLoading: isLoading,
    fetchCareerError: error,
    fetchCareerMutate: mutate,
  };
};

export default useFetchCareer;
