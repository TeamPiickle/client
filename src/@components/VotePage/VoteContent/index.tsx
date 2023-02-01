import { useState } from "react";
import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";
import AfterVoteList from "./AfterVoteList";
import BeforeVoteList from "./BeforeVoteList";
import St from "./style";

export default function VoteContent() {
  const params = useParams();
  const [voteId, setVoteId] = useState(`${params.voteId}`);
  const { ballotTopic, isBeforeVotingState, mutateBallotState } = useBallotTopic(voteId);

  if (!ballotTopic) return <Loading backgroundColor="white" />;

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
          <St.MoveBtn beforeId={true} onClick={() => setVoteId(`${ballotTopic.data.beforeTopicId}`)}>
            이전 질문
          </St.MoveBtn>
        ) : (
          <St.NoLinkBtn>이전 질문</St.NoLinkBtn>
        )}
        {ballotTopic.data.nextTopicId ? (
          <St.MoveBtn beforeId={false} onClick={() => setVoteId(`${ballotTopic.data.nextTopicId}`)}>
            다음 질문
          </St.MoveBtn>
        ) : (
          <St.LinkBtn to={routePaths.Main}>홈으로</St.LinkBtn>
        )}
      </St.BtnContainer>
    </>
  );
}
