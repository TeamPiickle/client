import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import Loading from "../../common/Loading";
import AfterVoteList from "../AfterVoteList";
import BeforeVoteList from "../BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const params = useParams();

  const { ballotTopic, isLoading, isError } = useBallotTopic(`${params.voteId}`);
  console.log(ballotTopic);

  const [isVoted, setIsVoted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("");
  const [isPosted, setIsPosted] = useState(true);
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

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
            setIsPosted={setIsPosted}
          />
        ) : (
          <BeforeVoteList
            ballotTopic={ballotTopic.data}
            isVoted={isVoted}
            setIsVoted={setIsVoted}
            setIsSuccess={setIsSuccess}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isPosted={isPosted}
            LOGIN_STATE={LOGIN_STATE}
          />
        )}
      </St.VoteContentContainer>
    );
}
