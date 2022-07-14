import { useState } from "react";

import AfterVoteList from "../AfterVoteList";
import BeforeVoteList from "../BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const [isVoted, setIsVoted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <St.VoteContentContainer>
      <St.VoteContentTitle>
        민초 vs 반민초 <br />
        여러분의 의견은?
      </St.VoteContentTitle>
      {!isSuccess && (
        <BeforeVoteList
          isVoted={isVoted}
          setIsVoted={setIsVoted}
          setIsSuccess={setIsSuccess}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {isSuccess && (
        <AfterVoteList
          setIsVoted={setIsVoted}
          setIsSuccess={setIsSuccess}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </St.VoteContentContainer>
  );
}
