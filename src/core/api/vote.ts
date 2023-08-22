import { PostingVote } from "../../types/remote/request";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postVote(postingVote: PostingVote) {
  return realReq.POST(PATH.BALLOTS, postingVote, { withCredentials: true });
}

export const voteApi = {
  postVote,
};
