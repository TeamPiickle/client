import { useRecoilValue } from "recoil";

import { IcCloseBtn } from "../../../asset/icon";
import { userTokenSelector } from "../../../core/atom/auth";
import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useOutClickCloser from "../../@common/hooks/useOutClickCloser";
import { useBallotLists } from "../../MainPage/hooks/useBallotLists";
import useNavigateCardCollection, { NavigateCardCollectionAllType } from "../hooks/useNavigateCardCollection";
import ModalPortal from "../Modal/Portal";
import ProfileContainer from "./ProfileContainer";
import DefaultProfileContainer from "./ProfileContainer/DefaultProfileContainer";
import St from "./style";

interface MenuBarProps {
  closeMenuBar: () => void;
}

export default function MenuBar(props: MenuBarProps) {
  const { closeMenuBar } = props;
  const outClickCloserRef = useOutClickCloser(closeMenuBar, true);

  const userToken = useRecoilValue(userTokenSelector);

  const { ballotLists } = useBallotLists();
  const navigateCardCollection = useNavigateCardCollection(LocationType.ALL) as NavigateCardCollectionAllType;

  const moveCardCollection = () => {
    navigateCardCollection();
    closeMenuBar();
  };

  return (
    <ModalPortal>
      <St.Root className={GTM_CLASS_NAME.menuOpacityClose}>
        <St.ContentsContainer ref={outClickCloserRef}>
          <St.CloseBtnContainer onClick={closeMenuBar}>
            <IcCloseBtn />
          </St.CloseBtnContainer>
          <St.Contents>
            {userToken ? (
              <ProfileContainer closeMenuBar={closeMenuBar} />
            ) : (
              <DefaultProfileContainer closeMenuBar={closeMenuBar} />
            )}
            <St.RecomendContainer>
              <St.CardRecomendWrapper className={GTM_CLASS_NAME.menuRecommendCard} onClick={moveCardCollection}>
                <St.Title className={GTM_CLASS_NAME.menuRecommendCard}>대화 카드</St.Title>
                <St.SubTitle className={GTM_CLASS_NAME.menuRecommendCard}>다양한 대화주제 추천</St.SubTitle>
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
              {userToken ? (
                <St.RecomendWrapper
                  to={routePaths.BookmarkPage}
                  className={GTM_CLASS_NAME.menuBookmark}
                  onClick={closeMenuBar}>
                  <St.Title className={GTM_CLASS_NAME.menuBookmark}>My Piickle</St.Title>
                  <St.SubTitle className={GTM_CLASS_NAME.menuBookmark}>북마크된 카드</St.SubTitle>
                </St.RecomendWrapper>
              ) : (
                <St.RecomendWrapper
                  to={routePaths.Login}
                  className={GTM_CLASS_NAME.menuBookmark}
                  onClick={closeMenuBar}>
                  <St.Title className={GTM_CLASS_NAME.menuBookmark}>My Piickle</St.Title>
                  <St.SubTitle className={GTM_CLASS_NAME.menuBookmark}>로그인 시 사용 가능합니다</St.SubTitle>
                </St.RecomendWrapper>
              )}
            </St.RecomendContainer>
          </St.Contents>
        </St.ContentsContainer>
      </St.Root>
    </ModalPortal>
  );
}
