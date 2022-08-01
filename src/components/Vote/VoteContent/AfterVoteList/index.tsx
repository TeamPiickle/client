import { useEffect } from "react";

import { IcCheck1 } from "../../../../asset/icon";
import { BallotTopicData, voteApi } from "../../../../core/api/vote";
import { St } from "./style";

interface AfterVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
  currentIndex: string;
  setCurrentIndex: React.Dispatch<React.SetStateAction<string>>;
}

export default function AfterVoteList(props: AfterVoteListProps) {
  const { ballotTopic, mutateBallotState, currentIndex, setCurrentIndex } = props;

  const cancelVote = () => {
    postCancelVote();
    mutateBallotState();
  };

  const postCancelVote = () => {
    if (!ballotTopic.userSelect) throw new Error("투표 데이터 에러");

    voteApi.postVote(ballotTopic.ballotTopic._id, ballotTopic.userSelect.ballotItemId);
  };

  useEffect(() => {
    if (ballotTopic.userSelect) setCurrentIndex(ballotTopic.userSelect.ballotItemId);
  }, [ballotTopic, setCurrentIndex]);

  return (
    <>
      <St.VoteOptionContainer>
        {ballotTopic &&
          ballotTopic.ballotItems.map((element) => {
            return (
              <St.VoteOptionList key={element._id}>
                <St.VotedDescription>
                  <St.IconTextContainer>
                    {currentIndex === element._id && <IcCheck1 />}
                    <St.VoteOptionText isSelected={element._id === currentIndex}>{element.content}</St.VoteOptionText>
                  </St.IconTextContainer>
                  <St.VotedPercent>{element.status}%</St.VotedPercent>
                </St.VotedDescription>
                <St.VotedProgressBarContainer isSelected={element._id === currentIndex}>
                  <St.VotedProgressBar width={element.status} isSelected={element._id === currentIndex} />
                </St.VotedProgressBarContainer>
              </St.VoteOptionList>
            );
          })}
      </St.VoteOptionContainer>
      <St.VoteBtnContainer>
        <St.VoteBtn onClick={cancelVote}>다시 투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
    </>
  );
}
