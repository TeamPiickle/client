import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

async function fetchballotLists() {
  const data = await realReq.GET(`${PATH.BALLOTS}`);

  return data.data;
}

// 투표 현황 조회
async function fetchVoteStatus(ballotId: string) {
  const data = await realReq.GET(`${PATH.USERS}/ballots/${ballotId}`);

  return data.data;
}

// 투표하기
async function postVote(ballotTopicId: string, ballotItemId: string) {
  return await realReq.POST(PATH.BALLOTS, {
    ballotTopicId,
    ballotItemId,
  });
}

export const real = {
  fetchballotLists,
  fetchVoteStatus,
  postVote,
};
