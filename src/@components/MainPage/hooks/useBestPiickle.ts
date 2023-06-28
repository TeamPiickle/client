import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { CardList } from "../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useBestPiickle() {
  const { data } = useSWR<PiickleSWRResponse<CardList[]>>(`${PATH.CARDS_}${PATH.CARDS_BEST}`, realReq.GET_SWR, {
    suspense: true,
  });

  return {
    bestPiickle: data?.data,
  };
}
