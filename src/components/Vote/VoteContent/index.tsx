import { useState } from "react";
import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import Loading from "../../common/Loading";
import AfterVoteList from "./AfterVoteList";
import BeforeVoteList from "./BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const params = useParams();
  const { ballotTopic, isBeforeVotingState, mutateBallotState } = useBallotTopic(`${params.voteId}`);

  if (!ballotTopic) return <Loading backgroundColor="white" />;
  else
    return (
      <St.VoteContentContainer>
        <St.VoteContentTitle>{ballotTopic.data.ballotTopic.ballotTopicContent}</St.VoteContentTitle>
        {isBeforeVotingState ? (
          <BeforeVoteList ballotTopic={ballotTopic.data} mutateBallotState={mutateBallotState} />
        ) : (
          <AfterVoteList ballotTopic={ballotTopic.data} mutateBallotState={mutateBallotState} />
        )}
      </St.VoteContentContainer>
    );
}
