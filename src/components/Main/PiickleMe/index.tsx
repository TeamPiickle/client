import { IcVoteImg } from "../../../asset/icon";
import { useBallotLists } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export default function PiickleMe() {
  const { ballotLists } = useBallotLists();

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[2]} />
      <St.RepresentVoteContentConTainer>
        <St.RepresentVoteContentText>{ballotLists && ballotLists.data[0].topic}</St.RepresentVoteContentText>
        <St.RepresentVoteContentSubText>현재 가장 참여수가 많은 투표</St.RepresentVoteContentSubText>
        <St.RepresentGoVoteBtnWrapper type="button">
          <St.RepresentGoVoteBtn to={`/vote/${ballotLists && ballotLists.data[0]._id}`}>투표하기</St.RepresentGoVoteBtn>
        </St.RepresentGoVoteBtnWrapper>
      </St.RepresentVoteContentConTainer>

      {ballotLists &&
        ballotLists.data.slice(1).map((ballot, idx: number) => (
          <St.VoteContent key={`${ballot._id}-${idx}`}>
            <St.VoteImgTextWrapper>
              <IcVoteImg aria-label="사용자 프로필 사진" />
              <St.VoteTextContainer>
                <St.VoteContentText>{ballot && ballot.topic}</St.VoteContentText>
              </St.VoteTextContainer>
            </St.VoteImgTextWrapper>
            <St.GoVoteBtnWrapper type="button">
              <St.GoVoteBtn to={`/vote/${ballot._id}`}>투표하기</St.GoVoteBtn>
            </St.GoVoteBtnWrapper>
          </St.VoteContent>
        ))}
    </St.Container>
  );
}
