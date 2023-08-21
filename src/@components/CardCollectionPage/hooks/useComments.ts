import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import { realReq } from "../../../core/api/common/axios";
import { respondedCardsState } from "../../../core/atom/event";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export interface CommentList {
  _id: string;
  content: string;
  profileImageUrl: string;
  nickname: string;
}

interface AddCommentParams {
  _id: string;
  content: string;
}

export type handleCommentController = (params: AddCommentParams) => void;

export function useComments(questionId: string) {
  const { data, mutate } = useSWR<PiickleSWRResponse<CommentList[]>>(
    `/mind23/api/comments/${questionId}`,
    realReq.GET_SWR,
    {
      suspense: true,
    },
  );
  const setRespondedCards = useSetRecoilState(respondedCardsState);

  const handleSubmitComment: handleCommentController = ({ _id, content }: AddCommentParams) => {
    cardCollectionApi.addComment(_id, content).then(() => mutate());
    setRespondedCards((prev) => (prev.includes(_id) ? prev : [...prev, _id]));
  };

  return {
    comments: data?.data.data,
    handleSubmitComment,
  };
}
