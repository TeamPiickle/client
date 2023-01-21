import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";
import AfterVoteList from "./AfterVoteList";
import BeforeVoteList from "./BeforeVoteList";
import St from "./style";

export default function VoteContent() {
  const params = useParams();
  const { ballotTopic, isBeforeVotingState, mutateBallotState } = useBallotTopic(`${params.voteId}`);

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

      <St.LinkBtnContainer>
        {ballotTopic.data.beforeTopicId ? (
          <St.LinkBtn to={`${routePaths.Vote}/${ballotTopic.data.beforeTopicId}`}>이전 질문</St.LinkBtn>
        ) : (
          <St.NoLinkBtn>이전 질문</St.NoLinkBtn>
        )}
        {ballotTopic.data.nextTopicId ? (
          <St.LinkBtn to={`${routePaths.Vote}/${ballotTopic.data.nextTopicId}`}>다음 질문</St.LinkBtn>
        ) : (
          <St.LinkBtn to={routePaths.Main}>홈으로</St.LinkBtn>
        )}
      </St.LinkBtnContainer>
    </>
  );
}
