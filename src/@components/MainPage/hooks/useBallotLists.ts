import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { BallotList } from "../../../types/main";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useBallotLists() {
  const { data } = useSWR<PiickleSWRResponse<BallotList[]>>(`${PATH.BALLOTS}`, realReq.GET_SWR);

  return {
    ballotLists: data?.data,
  };
}
