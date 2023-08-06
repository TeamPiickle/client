import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { RecentCardList } from "../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useRecentlyBookmarked() {
  const { data } = useSWR<PiickleSWRResponse<RecentCardList>>(`${PATH.CARDS_}${PATH.CARDS_RECENT}`, realReq.GET_SWR, {
    suspense: true,
  });

  return {
    recentlyBookmarkedDate: data?.data.data.recentlyDate,
    recentlyBookmarkedCards: data?.data.data.cardResponseDtos,
  };
}
