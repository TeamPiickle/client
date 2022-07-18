import { IcVoteImg1, IcVoteImg2 } from "../../../asset/icon";
import { useBallotLists } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

type ballot = {
  _id: string;
  title: string;
};

export default function PiickleMe() {
  const { ballotLists, isLoading, isError } = useBallotLists();

  if (ballotLists)
    return (
      <St.Container>
        <HeadingTitleContainer headingTitles={headingTitles[2]} />

        <St.RepresentVoteContentConTainer>
          <St.RepresentVoteContentText>{ballotLists && ballotLists.data[0].title}</St.RepresentVoteContentText>
          <St.RepresentVoteContentSubText>현재 가장 참여수가 많은 투표</St.RepresentVoteContentSubText>
          <St.RepresentGoVoteBtnWrapper type="button">
            <St.RepresentGoVoteBtn to={ballotLists && `/ballots/${ballotLists.data[0]._id}`}>
              투표하기
            </St.RepresentGoVoteBtn>
          </St.RepresentGoVoteBtnWrapper>
        </St.RepresentVoteContentConTainer>

        {ballotLists.data.slice(1).map((ballot: ballot, idx: number) => (
          <St.VoteContent key={`${ballot._id}-${idx}`}>
            <St.VoteImgTextWrapper>
              <IcVoteImg2 aria-label="사용자 프로필 사진" />
              <St.VoteTextContainer>
                <St.VoteContentText>{ballot && ballot.title}</St.VoteContentText>
              </St.VoteTextContainer>
            </St.VoteImgTextWrapper>
            <St.GoVoteBtnWrapper type="button">
              <St.GoVoteBtn to={ballotLists && `/ballots/${ballot._id}`}>투표하기</St.GoVoteBtn>
            </St.GoVoteBtnWrapper>
          </St.VoteContent>
        ))}
      </St.Container>
    );
  else return <></>;
}
