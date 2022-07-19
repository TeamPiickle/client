import useSWR from "swr";

import { PiickleSWRResponse } from "../../types/swr";
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

interface BallotTopicData {
  ballotTopic: BallotTopic;
  ballotItems: BallotItems[];
  userSelect: UserSelect;
}

// 투표 현황 조회
export default function useBallotTopic(ballotId: string) {
  console.log("hello");
  const { data, error } = useSWR<PiickleSWRResponse<BallotTopicData>>(`${PATH.BALLOTS}/${ballotId}`, realReq.GET_SWR);
  console.log(data);
  return {
    ballotTopic: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

// 투표하기
function postVote(ballotTopicId: string, ballotItemId: string) {
  return realReq.POST(PATH.BALLOTS, {
    ballotTopicId,
    ballotItemId,
  });
}

export const real = {
  postVote,
};
