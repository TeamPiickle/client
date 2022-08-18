import useSWR from "swr";

import { CardList } from "../../types/cardCollection";
import { BallotList, CategoryList } from "../../types/main";
import { PiickleSWRResponse } from "../../types/swr";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 전체 카테고리 조화
export function useCategoryLists() {
  const { data, error } = useSWR<PiickleSWRResponse<CategoryList[]>>(PATH.CATEGORIES, realReq.GET_SWR);

  return {
    categoryLists: data?.data,
    randomCategoryLists: data && [...data.data.data].sort(() => Math.random() - 0.5),
    isLoading: !error && !data,
  };
}

export function useBestPiickle() {
  const { data, error } = useSWR<PiickleSWRResponse<CardList[]>>(`${PATH.CARDS}/best`, realReq.GET_SWR);

  return {
    bestPiickle: data?.data,
    isLoading: !error && !data,
  };
}
export function useBallotLists() {
  const { data, error } = useSWR<PiickleSWRResponse<BallotList[]>>(`${PATH.BALLOTS}`, realReq.GET_SWR);

  return {
    ballotLists: data?.data,
    isLoading: !error && !data,
  };
}
