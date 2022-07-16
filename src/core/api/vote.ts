import useSWR from "swr";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 투표 현황 조회
export default function useBallotTopic(ballotId: string) {
  const { data, error } = useSWR(`${PATH.BALLOTS}/${ballotId}`, realReq.GET_SWR);

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
