import { AboutContentsType } from "@/types/types";
import useSWR, { Fetcher } from "swr";

type UseFetchAbout = {
  about: AboutContentsType | undefined;
  fetchAboutLoading: boolean;
  fetchAboutError: Error;
  fetchAboutMutate: () => Promise<void | AboutContentsType | undefined>;
};

const fetcher: Fetcher<AboutContentsType, string> = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data as AboutContentsType;
};

const useFetchAbout = (): UseFetchAbout => {
  const url = "/text/about.json";

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    about: data,
    fetchAboutLoading: isLoading,
    fetchAboutError: error,
    fetchAboutMutate: mutate,
  };
};

export default useFetchAbout;
