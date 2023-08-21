import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { EventCardList } from "../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useParticipantCount() {
  const { data } = useSWR<PiickleSWRResponse<EventCardList>>("/mind23/api/questions", realReq.GET_SWR, {
    suspense: true,
  });

  return {
    count: data?.data.data.totalCount ?? 0,
  };
}
