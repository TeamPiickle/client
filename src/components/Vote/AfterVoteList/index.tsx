import { useEffect, useState } from "react";

import { IcCheck1 } from "../../../asset/icon";
import { voteContent, voteTitle } from "../../../core/vote/voteContent";
import { St } from "./style";

export default function AfterVoteList(props: any) {
  const { setIsVoted, setIsSuccess, currentIndex } = props;
  const cancelVote = () => {
    setIsSuccess(false);
    setIsVoted(false);
  };
  return (
    <>
      <St.VoteOptionContainer>
        {voteContent.map((element) => {
          return (
            <St.VoteOptionList key={element.id}>
              <St.VotedDescription>
                <St.IconTextContainer>
                  {currentIndex === element.id && <IcCheck1 />}
                  <St.VoteOptionText isSelected={element.id === currentIndex}>{element.name}</St.VoteOptionText>
                </St.IconTextContainer>
                <St.VotedPercent>65.6%</St.VotedPercent>
              </St.VotedDescription>
              <St.VotedProgressBarContainer isSelected={element.id === currentIndex}>
                <St.VotedProgressBar isSelected={element.id === currentIndex} />
              </St.VotedProgressBarContainer>
            </St.VoteOptionList>
          );
        })}
      </St.VoteOptionContainer>
      <St.VoteBtnContainer>
        <St.VoteBtn onClick={cancelVote}>재투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
    </>
  );
}
