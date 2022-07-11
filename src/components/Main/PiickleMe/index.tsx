import { IcVoteImg1, IcVoteImg2 } from "../../../asset/icon";
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
      <St.RepresentVoteContentConTainer>
        <St.VoteContentText isFirst={true}>{representVoteData.contentText}</St.VoteContentText>
        <St.VoteContentSubText isFirst={true}>{representVoteData.discription}</St.VoteContentSubText>
        <St.RepresentGoVoteBtn>투표하기</St.RepresentGoVoteBtn>
      </St.RepresentVoteContentConTainer>
      {voteData.map((element) => {
        return (
          <St.VoteContent key={element.id}>
            {element.profileImg}
            <St.VoteTextContainer>
              <St.VoteContentText isFirst={false}>{element.contentText.slice(0, 18)}...</St.VoteContentText>
              <St.VoteContentSubText isFirst={false}>{element.subText}</St.VoteContentSubText>
            </St.VoteTextContainer>
            <St.GoVoteBtn>{element.voteBtn}</St.GoVoteBtn>
          </St.VoteContent>
        );
      })}
    </St.Container>
  );
}
