import { useState } from "react";

import { IcCheck2 } from "../../../asset/icon";
import { voteContent } from "../../../core/vote/voteContent";
import { St } from "./style";

export default function BeforeVoteList(props: any) {
  const { isVoted, setIsVoted, setIsSuccess, setSelectedOption, currentIndex, setCurrentIndex } = props;

  const successVote = () => {
    if (isVoted === true) {
      setIsSuccess(true);
      setSelectedOption(currentIndex);
    }
  };

  //함수단위 쪼개기
  const clickHandle = (key: number) => {
    if (isVoted === true) {
      if (currentIndex === key) {
        setIsVoted(false);
      }
      setCurrentIndex(key);
    } else {
      setIsVoted(!isVoted);
      setCurrentIndex(key);
    }
  };
  return (
    <>
      <St.VoteOptionContainer>
        {voteContent.map((element, i) => {
          return (
            <St.VoteOptionList
              key={element.id}
              onClick={() => clickHandle(element.id)}
              isClicked={isVoted && i == currentIndex}>
              <St.VoteOptionText>{element.name}</St.VoteOptionText>
              <IcCheck2 />
            </St.VoteOptionList>
          );
        })}
      </St.VoteOptionContainer>
      <St.VoteBtnContainer>
        <St.VoteBtn onClick={successVote}>투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
    </>
  );
}
