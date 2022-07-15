import { useEffect, useState } from "react";

import { IcVoteImg1, IcVoteImg2 } from "../../../asset/icon";
import { real } from "../../../core/api/vote";
import { headingTitles } from "../../../core/main/headingTitles";
import { BallotList } from "../../../types/main";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export default function PiickleMe() {
  const [ballotLists, setBallotLists] = useState<BallotList[]>([]);

  useEffect(() => {
    (async () => {
      const data = await real.fetchballotLists();
      setBallotLists(data);
    })();
  }, []);

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[2]} />
      <St.RepresentVoteContentConTainer>
        <St.RepresentVoteContentText>{ballotLists[0] && ballotLists[0].title}</St.RepresentVoteContentText>
        <St.RepresentVoteContentSubText>현재 가장 참여수가 많은 투표</St.RepresentVoteContentSubText>
        <St.RepresentGoVoteBtn>투표하기</St.RepresentGoVoteBtn>
      </St.RepresentVoteContentConTainer>
      {ballotLists.slice(1).map((ballot, idx) => {
        return (
          <St.VoteContent key={`${ballot._id}-${idx}`}>
            <St.VoteImgTextWrapper>
              <IcVoteImg2 aria-label="사용자 프로필 사진" />
              <St.VoteTextContainer>
                <St.VoteContentText>{ballot && ballot.title}</St.VoteContentText>
              </St.VoteTextContainer>
            </St.VoteImgTextWrapper>
            <St.GoVoteBtn>투표하기</St.GoVoteBtn>
          </St.VoteContent>
        );
      })}
    </St.Container>
  );
}
