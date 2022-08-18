import { useCallback, useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import { PostingVote } from "../../types/remote/request";
import { PiickleSWRResponse } from "../../types/remote/swr";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

type BallotTopic = {
  _id: string;
  ballotTopicContent: string;
};

type BallotItems = {
  _id: string;
  status: number;
  content: string;
};

type UserSelect = {
  _id: string;
  ballotItemId: string;
};

export interface BallotTopicData {
  ballotTopic: BallotTopic;
  ballotItems: BallotItems[];
  userSelect: UserSelect | null;
}

// 투표 현황 조회
export default function useBallotTopic(ballotId: string) {
  const { data, error } = useSWR<PiickleSWRResponse<BallotTopicData>>(`${PATH.BALLOTS}/${ballotId}`, realReq.GET_SWR);
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
    isLoading: !error && !data,
    isBeforeVotingState,
    mutateBallotState: () => {
      setTimeout(() => mutate(`${PATH.BALLOTS}/${ballotId}`), 200);
      handlingVotingState();
    },
  };
}

// 투표하기
function postVote(postingVote: PostingVote) {
  return realReq.POST(PATH.BALLOTS, postingVote);
}

export const voteApi = {
  postVote,
};
