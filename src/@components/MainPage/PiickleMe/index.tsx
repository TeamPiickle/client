import { useBallotLists } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import St from "./style";

export default function PiickleMe() {
  const { ballotLists } = useBallotLists();

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[2]} />
      <St.VoteBanner
        to={`${routePaths.Vote}/${ballotLists && ballotLists.data[0]._id}`}
        className={GTM_CLASS_NAME.mainVote1}>
        <St.BannerContainer>
          <St.BannerContentWrapper>
            <St.MainContentSubText>현재 가장 참여수가 많은 투표</St.MainContentSubText>
          </St.BannerContentWrapper>
          <St.MainContentText>{ballotLists && ballotLists.data[0].topic}</St.MainContentText>
        </St.BannerContainer>
        <St.BannerVoteBtn>투표하기</St.BannerVoteBtn>
      </St.VoteBanner>

      {ballotLists &&
        ballotLists.data.slice(1).map((ballot, idx: number) => (
          <St.ContentWrapper
            key={`${ballot._id}-${idx}`}
            to={`${routePaths.Vote}/${ballot._id}`}
            className={GTM_CLASS_NAME[`mainVote${idx + 2}`]}>
            <St.ContentText>{ballot && ballot.topic}</St.ContentText>
            <St.VoteBtn>투표하기</St.VoteBtn>
          </St.ContentWrapper>
        ))}
    </St.Container>
  );
}
