import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcCloseBtn } from "../../../asset/icon";
import { useBallotLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useOutClickCloser from "../../@common/hooks/useOutClickCloser";
import ProfileContainer from "./ProfileContainer";
import DefaultProfileContainer from "./ProfileContainer/DefaultProfileContainer";
import { St, StContentsContainer } from "./style";
interface MenuBarProps {
  closeMenuBar: () => void;
}

export default function MenuBar(props: MenuBarProps) {
  const { closeMenuBar } = props;

  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const navigate = useNavigate();

  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const { ballotLists } = useBallotLists();

  const moveCardCollection = () => {
    navigate(routePaths.CardCollection, { state: { type: "all" } });
    setSliderIdx(0);
    closeMenuBar();
  };

  const openElement = useOutClickCloser({
    handleOutClickCloser: () => {
      closeMenuBar();
    },
  });

  return (
    <St.Root>
      <StContentsContainer ref={openElement}>
        <St.CloseBtnContainer onClick={closeMenuBar}>
          <IcCloseBtn />
        </St.CloseBtnContainer>
        <St.Contents>
          {LOGIN_STATE ? (
            <ProfileContainer closeMenuBar={closeMenuBar} />
          ) : (
            <DefaultProfileContainer closeMenuBar={closeMenuBar} />
          )}
          <St.RecomendContainer>
            <St.CardRecomendWrapper className={GTM_CLASS_NAME.menuRecommendCard} onClick={moveCardCollection}>
              <St.Title className={GTM_CLASS_NAME.menuRecommendCard}>대화 주제 추천 카드</St.Title>
              <St.SubTitle>다양한 주제를 담은 카드</St.SubTitle>
            </St.CardRecomendWrapper>
            <St.RecomendWrapper
              to={routePaths.Category}
              className={GTM_CLASS_NAME.menuMoodPiickle}
              onClick={closeMenuBar}>
              <St.Title className={GTM_CLASS_NAME.menuMoodPiickle}>Mood Piickles</St.Title>
              <St.SubTitle className={GTM_CLASS_NAME.menuMoodPiickleSub}>카테고리별 대화주제 추천</St.SubTitle>
            </St.RecomendWrapper>
            <St.RecomendWrapper
              to={`${routePaths.Vote}/${ballotLists?.data[0]._id}`}
              className={GTM_CLASS_NAME.menuPiickleMe}
              onClick={closeMenuBar}>
              <St.Title className={GTM_CLASS_NAME.menuPiickleMe}>Piickle Me</St.Title>
              <St.SubTitle className={GTM_CLASS_NAME.menuPiickleMeSub}>진행중인 투표</St.SubTitle>
            </St.RecomendWrapper>
            {LOGIN_STATE ? (
              <St.RecomendWrapper to={routePaths.BookmarkPage} onClick={closeMenuBar}>
                <St.Title>My Piickle</St.Title>
                <St.SubTitle>북마크된 카드</St.SubTitle>
              </St.RecomendWrapper>
            ) : (
              <St.RecomendWrapper to={routePaths.Login} onClick={closeMenuBar}>
                <St.Title>My Piickle</St.Title>
                <St.SubTitle>로그인 시 사용 가능</St.SubTitle>
              </St.RecomendWrapper>
            )}
          </St.RecomendContainer>
        </St.Contents>
      </StContentsContainer>
    </St.Root>
  );
}
