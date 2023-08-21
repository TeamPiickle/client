import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export interface CommentList {
  _id: string;
  content: string;
  profileImageUrl: string;
  nickname: string;
}

export function useComments(questionId: string) {
  const { data } = useSWR<PiickleSWRResponse<CommentList[]>>(`/mind23/api/comments/${questionId}`, realReq.GET_SWR, {
    suspense: true,
  });

  return {
    comments: data?.data.data,
  };
}
