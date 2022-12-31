import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcCloseBtn } from "../../../asset/icon";
import { useBallotLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
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

  return (
    <St.Root>
      <StContentsContainer>
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
            <St.CardRecomendWrapper onClick={moveCardCollection}>
              <St.Title className="GTM_대화주제추천">대화 주제 추천 카드</St.Title>
            </St.CardRecomendWrapper>
            <St.RecomendWrapper to={routePaths.Category} onClick={closeMenuBar}>
              <St.Title className="GTM_MoodPiickle">Mood Piickles</St.Title>
              <St.SubTitle className="GTM_MoodPiickle_sub">카테고리별 대화주제 추천</St.SubTitle>
            </St.RecomendWrapper>
            <St.RecomendWrapper to={`${routePaths.Vote}/${ballotLists?.data[0]._id}`} onClick={closeMenuBar}>
              <St.Title className="GTM_PiickleMe">Piickle Me</St.Title>
              <St.SubTitle className="GTM_PiickleMe_sub">진행중인 투표</St.SubTitle>
            </St.RecomendWrapper>
          </St.RecomendContainer>
        </St.Contents>
      </StContentsContainer>
    </St.Root>
  );
}
