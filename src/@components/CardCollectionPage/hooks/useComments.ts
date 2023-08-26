import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import { realReq } from "../../../core/api/common/axios";
import { respondedCardsState } from "../../../core/atom/event";
import useAuth from "../../../core/hooks/useAuth";
import { PiickleSWRResponse } from "../../../types/remote/swr";
import useModal from "../../@common/hooks/useModal";
import { useParticipantCount } from "./useParticipantCount";

export interface CommentList {
  _id: string;
  content: string;
  profileImageUrl: string;
  nickname: string;
  commentStatus: boolean;
}

interface AddCommentParams {
  _id: string;
  content: string;
}

export type handleCommentController = (params: AddCommentParams) => void;

export function useComments(questionId: string, onClickBeforeLogin: () => void) {
  const { data, mutate } = useSWR<PiickleSWRResponse<CommentList[]>>(
    `/mind23/api/comments/${questionId}`,
    realReq.GET_SWR,
    {
      suspense: true,
    },
  );
  const { isLogin } = useAuth();
  const { mutateParticipantCount } = useParticipantCount();
  const { isModalOpen: isComment, toggleModal: toggleCommentModal } = useModal();

  const setRespondedCards = useSetRecoilState(respondedCardsState);

  const handleSubmitComment: handleCommentController = useCallback(
    ({ _id, content }: AddCommentParams) => {
      cardCollectionApi.addComment(_id, content).then(() => {
        mutate();
      });
      mutateParticipantCount();
      setRespondedCards((prev) => (prev.includes(_id) ? prev : [...prev, _id]));
    },
    [mutate, mutateParticipantCount, setRespondedCards],
  );

  const handleClickComment = useCallback(() => {
    switch (isLogin) {
      case true:
        toggleCommentModal();
        break;
      case false:
        onClickBeforeLogin();
        break;
    }
  }, [isLogin, onClickBeforeLogin, toggleCommentModal]);

  return {
    comments: data?.data.data,
    handleSubmitComment,
    handleClickComment,
    isComment,
  };
}
