import { IcCheck1 } from "../../../asset/icon";
import { St } from "./style";

type propsType = {
  setIsVoted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  ballotTopic: any;
  setIsPosted: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AfterVoteList(props: propsType) {
  const { setIsVoted, setIsSuccess, currentIndex, ballotTopic, setIsPosted } = props;
  const cancelVote = () => {
    setIsSuccess(false);
    setIsVoted(false);
    setIsPosted(true);
  };

  console.log(ballotTopic.data.ballotItems);

  return (
    <>
      <St.VoteOptionContainer>
        {ballotTopic &&
          ballotTopic.data.ballotItems.map((element: any) => {
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
        <St.VoteBtn onClick={cancelVote}>재투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
    </>
  );
}
