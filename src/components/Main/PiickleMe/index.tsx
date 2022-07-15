import { IcVoteImg1, IcVoteImg2 } from "../../../asset/icon";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import { St } from "./style";

const voteData = [
  {
    id: 0,
    profileImg: <IcVoteImg2 aria-label="사용자 프로필 사진" />,
    contentText: "인간관계에서 가장 중요하게 생각하는 것은?",
    subText: "텍스트텍스트",
    voteBtn: "투표하기",
  },
  {
    id: 1,
    profileImg: <IcVoteImg1 aria-label="사용자 프로필 사진" />,
    contentText: "인간관계에서 가장 중요하게 생각하는 것은?",
    subText: "텍스트텍스트",
    voteBtn: "투표하기",
  },
  {
    id: 2,
    profileImg: <IcVoteImg1 aria-label="사용자 프로필 사진" />,
    contentText: "인간관계에서 가장 중요하게 생각하는 것은?",
    subText: "텍스트텍스트",
    voteBtn: "투표하기",
  },
];

const representVoteData = {
  contentText: "남사친에게 깻잎을 떼주냐 안떼주냐 남사친에게 깻잎을 떼주냐 안떼주냐 ",
  discription: "현재 가장 참여수가 많은 투표",
};

export default function PiickleMe() {
  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[2]} />
      <St.RepresentVoteContentConTainer>
        <St.RepresentVoteContentText>{representVoteData.contentText}</St.RepresentVoteContentText>
        <St.RepresentVoteContentSubText>{representVoteData.discription}</St.RepresentVoteContentSubText>
        <St.RepresentGoVoteBtn>투표하기</St.RepresentGoVoteBtn>
      </St.RepresentVoteContentConTainer>
      {voteData.map((element) => {
        return (
          <St.VoteContent key={element.id}>
            <St.VoteImgTextWrapper>
              {element.profileImg}
              <St.VoteTextContainer>
                <St.VoteContentText>{element.contentText.slice(0, 18)}...</St.VoteContentText>
              </St.VoteTextContainer>
            </St.VoteImgTextWrapper>
            <St.GoVoteBtn>{element.voteBtn}</St.GoVoteBtn>
          </St.VoteContent>
        );
      })}
    </St.Container>
  );
}
