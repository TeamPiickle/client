import { IcCheck1 } from "../../../asset/icon";
import { voteContent, voteTitle } from "../../../core/vote/voteContent";
import { St } from "./style";

export default function AfterVoteList() {
  return (
    <>
      <St.VoteOptionContainer>
        {voteContent.map((element) => {
          return (
            <St.VoteOptionList key={element.id}>
              <St.VotedDescription>
                <St.IconTextContainer>
                  <IcCheck1 />
                  <St.VoteOptionText>{element.name}</St.VoteOptionText>
                </St.IconTextContainer>
                <St.VotedPercent>65.6%</St.VotedPercent>
              </St.VotedDescription>
              <St.VotedProgressBar />
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
