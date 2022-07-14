import { useState } from "react";

import { IcCheck2 } from "../../../asset/icon";
import { voteContent, voteTitle } from "../../../core/vote/voteContent";
import { St } from "./style";

export default function BeforeVoteList(props: any) {
  const { isVoted, setIsVoted } = props;
  // const [isVoted, setIsVoted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clickHandle = (key: number) => {
    setIsVoted(!isVoted);
    setCurrentIndex(key);
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
        <St.VoteBtn>투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
    </>
  );
}
