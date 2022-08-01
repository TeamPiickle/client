import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import Loading from "../../common/Loading";
import AfterVoteList from "./AfterVoteList";
import BeforeVoteList from "./BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const params = useParams();
  const { ballotTopic, mutateBallotState } = useBallotTopic(`${params.voteId}`);

  console.log(ballotTopic);

  const [isVoted, setIsVoted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("");

  useEffect(() => {
    if (ballotTopic?.data.userSelect) setIsSuccess(true);
  }, [ballotTopic]);

  if (!ballotTopic) return <Loading backgroundColor="white" />;
  else
    return (
      <St.VoteContentContainer>
        <St.VoteContentTitle>{ballotTopic.data.ballotTopic.ballotTopicContent}</St.VoteContentTitle>
        {isSuccess ? (
          <AfterVoteList
            ballotTopic={ballotTopic.data}
            setIsVoted={setIsVoted}
            setIsSuccess={setIsSuccess}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ) : (
          <BeforeVoteList
            ballotTopic={ballotTopic.data}
            mutateBallotState={mutateBallotState}
            isVoted={isVoted}
            setIsVoted={setIsVoted}
            setIsSuccess={setIsSuccess}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            LOGIN_STATE={LOGIN_STATE}
          />
        )}
      </St.VoteContentContainer>
    );
}
