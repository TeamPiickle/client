import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useBallotTopic from "../hooks/useBallotTopic";
import AfterVoteList from "./AfterVoteList";
import BeforeVoteList from "./BeforeVoteList";
import St from "./style";

export default function VoteContent() {
  const params = useParams();
  const [voteId, setVoteId] = useState(`${params.voteId}`);
  const { ballotTopic, isBeforeVotingState, mutateBallotState } = useBallotTopic(voteId);
  const navigate = useNavigate();

  if (!ballotTopic) return null;
  return (
    <>
      <St.VoteContentContainer>
        <St.VoteContentTitle>{ballotTopic.data.ballotTopic.ballotTopicContent}</St.VoteContentTitle>
        {isBeforeVotingState ? (
          <BeforeVoteList ballotTopic={ballotTopic.data} mutateBallotState={mutateBallotState} />
        ) : (
          <AfterVoteList ballotTopic={ballotTopic.data} mutateBallotState={mutateBallotState} />
        )}
      </St.VoteContentContainer>

      <St.BtnContainer>
        {ballotTopic.data.beforeTopicId ? (
          <St.BeforeBtn
            className={GTM_CLASS_NAME.piickleMeBack}
            onClick={() => setVoteId(`${ballotTopic.data.beforeTopicId}`)}>
            이전 질문
          </St.BeforeBtn>
        ) : (
          <St.NoLinkBtn>이전 질문</St.NoLinkBtn>
        )}
        {ballotTopic.data.nextTopicId ? (
          <St.MoveBtn
            className={GTM_CLASS_NAME.piickleMeNext}
            onClick={() => setVoteId(`${ballotTopic.data.nextTopicId}`)}>
            다음 질문
          </St.MoveBtn>
        ) : (
          <St.MoveBtn
            className={GTM_CLASS_NAME.piickleMeHome}
            onClick={() => {
              navigate(routePaths.Main);
            }}>
            홈으로
          </St.MoveBtn>
        )}
      </St.BtnContainer>
    </>
  );
}
