import { useState } from "react";
import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import Loading from "../../common/Loading";
import AfterVoteList from "./AfterVoteList";
import BeforeVoteList from "./BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const params = useParams();
  const { ballotTopic, isBeforeVotingState, mutateBallotState } = useBallotTopic(`${params.voteId}`);

  const [currentIndex, setCurrentIndex] = useState("");

  if (!ballotTopic) return <Loading backgroundColor="white" />;
  else
    return (
      <St.VoteContentContainer>
        <St.VoteContentTitle>{ballotTopic.data.ballotTopic.ballotTopicContent}</St.VoteContentTitle>
        {isBeforeVotingState ? (
          <BeforeVoteList
            ballotTopic={ballotTopic.data}
            mutateBallotState={mutateBallotState}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            LOGIN_STATE={LOGIN_STATE}
          />
        ) : (
          <AfterVoteList
            ballotTopic={ballotTopic.data}
            mutateBallotState={mutateBallotState}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </St.VoteContentContainer>
    );
}
