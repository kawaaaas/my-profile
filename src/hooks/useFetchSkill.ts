import { SkillContentsType } from "@/types/types";
import useSWR, { Fetcher } from "swr";

type UseFetchSkill = {
  skill: SkillContentsType[] | undefined;
  fetchSkillLoading: boolean;
  fetchSkillError: Error;
  fetchSkillMutate: () => Promise<void | SkillContentsType[] | undefined>;
};

const fetcher: Fetcher<SkillContentsType[], string> = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data as SkillContentsType[];
};

const useFetchSkill = (): UseFetchSkill => {
  const url = "/text/skills.json";

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    skill: data,
    fetchSkillLoading: isLoading,
    fetchSkillError: error,
    fetchSkillMutate: mutate,
  };
};

export default useFetchSkill;
