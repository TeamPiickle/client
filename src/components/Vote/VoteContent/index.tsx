import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useBallotTopic from "../../../core/api/vote";
import AfterVoteList from "../AfterVoteList";
import BeforeVoteList from "../BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const params = useParams();
  console.log("before");
  const { ballotTopic, isLoading, isError } = useBallotTopic(`${params.voteId}`);
  useEffect(() => {
    console.log(ballotTopic);
  }, [ballotTopic]);

  const [isVoted, setIsVoted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("");
  const [isPosted, setIsPosted] = useState(true);
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  return (
    <St.VoteContentContainer>
      <St.VoteContentTitle>{ballotTopic && ballotTopic.data.ballotTopic.ballotTopicContent}</St.VoteContentTitle>
      {/* {ballotTopic && isSuccess ? ( */}
      <AfterVoteList
        setIsVoted={setIsVoted}
        setIsSuccess={setIsSuccess}
        currentIndex={currentIndex}
        ballotTopic={ballotTopic}
        setIsPosted={setIsPosted}
      />
      {/* ) : (
        <BeforeVoteList
          isVoted={isVoted}
          setIsVoted={setIsVoted}
          setIsSuccess={setIsSuccess}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isPosted={isPosted}
          LOGIN_STATE={LOGIN_STATE}
        />
      )} */}
    </St.VoteContentContainer>
  );
}
