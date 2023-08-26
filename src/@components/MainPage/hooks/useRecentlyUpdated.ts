import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { RecentCardList } from "../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useRecentlyUpdated() {
  const { data } = useSWR<PiickleSWRResponse<RecentCardList>>(`${PATH.CARDS_}${PATH.CARDS_UPDATE}`, realReq.GET_SWR, {
    suspense: true,
  });

  return {
    recentlyUpdatedDate: data?.data.data.recentlyDate,
    recentlyUpdatedCards: data?.data.data.cardResponseDtos,
  };
}
