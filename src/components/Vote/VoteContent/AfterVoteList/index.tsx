import { IcCheckWithBg } from "../../../../asset/icon";
import { BallotTopicData, voteApi } from "../../../../core/api/vote";
import { St } from "./style";

interface AfterVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
}

export default function AfterVoteList(props: AfterVoteListProps) {
  const { ballotTopic, mutateBallotState } = props;

  const cancelVote = () => {
    if (!ballotTopic.userSelect) throw new Error("투표 데이터 에러");
    voteApi.postVote(ballotTopic.ballotTopic._id, ballotTopic.userSelect.ballotItemId);

    mutateBallotState();
  };

  return (
    <>
      <St.VoteOptionContainer>
        {ballotTopic &&
          ballotTopic.ballotItems.map((element) => {
            const SELECTED = element._id === ballotTopic.userSelect?.ballotItemId;

            return (
              <St.VoteOptionList key={element._id}>
                <St.VotedDescription>
                  <St.IconTextContainer>
                    {SELECTED && <IcCheckWithBg />}
                    <St.VoteOptionText isSelected={SELECTED}>{element.content}</St.VoteOptionText>
                  </St.IconTextContainer>
                  <St.VotedPercent>{element.status}%</St.VotedPercent>
                </St.VotedDescription>
                <St.VotedProgressBarContainer isSelected={SELECTED}>
                  <St.VotedProgressBar width={element.status} isSelected={SELECTED} />
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
