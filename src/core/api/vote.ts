import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function fetchballotLists() {
  return realReq.GET(`${PATH.BALLOTS}`);
}

// 투표 현황 조회
function fetchVoteStatus(ballotId: string) {
  return realReq.GET(`${PATH.USERS}/ballots/${ballotId}`);
}

// 투표하기
function postVote(ballotTopicId: string, ballotItemId: string) {
  return realReq.POST(PATH.BALLOTS, {
    ballotTopicId,
    ballotItemId,
  });
}

export const real = {
  fetchballotLists,
  fetchVoteStatus,
  postVote,
};
