import { useCallback, useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { BallotTopicData } from "../../../types/ballots";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export default function useBallotTopic(ballotId: string) {
  const { data } = useSWR<PiickleSWRResponse<BallotTopicData>>(`${PATH.BALLOTS}/${ballotId}`, realReq.GET_SWR, {
    suspense: true,
  });
  const { mutate } = useSWRConfig();

  const [isBeforeVotingState, setIsBeforeVotingState] = useState(true);

  const handlingVotingState = useCallback(() => {
    if (data?.data.data.userSelect) setIsBeforeVotingState(false);
    else setIsBeforeVotingState(true);
  }, [data]);

  useEffect(() => {
    handlingVotingState();
  }, [handlingVotingState]);

  return {
    ballotTopic: data?.data,
    isBeforeVotingState,
    mutateBallotState: () => {
      setTimeout(() => mutate(`${PATH.BALLOTS}/${ballotId}`), 200);
      handlingVotingState();
    },
  };
}
