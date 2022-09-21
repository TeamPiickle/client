import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IcEmptyCheckBox, IcFullCheckBox, IcSmallEmptyCheckBox, IcSmallFullCheckBox } from "../../asset/icon";
import { feedBackListsContents } from "../../core/delete/feedBackListsContents";
import { routePaths } from "../../core/routes/path";
import Footer from "../@common/Footer";
import Header from "../JoinPage/common/Header";
import { St } from "./style";

export default function DeletePage() {
  const navigate = useNavigate();

  const [ischecked, setIsChecked] = useState(false);
  const [isFeedBackItems, setIsFeedBackItems] = useState<boolean[]>([false, false, false, false, false]);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const feedBackLists = feedBackListsContents.map((item, index) => (
    <St.FeedBackListsContents key={index}>
      <St.OptionalCheckBox type="button" onClick={() => handleChecking(index)}>
        {isFeedBackItems[index] ? <IcFullCheckBox /> : <IcEmptyCheckBox />}
      </St.OptionalCheckBox>
      {item.text}
    </St.FeedBackListsContents>
  ));

  const handleChecking = (index: number) => {
    setIsFeedBackItems((prevItems) => {
      const currentItems = [...prevItems];
      currentItems[index] = !currentItems[index];
      return currentItems;
    });
  };

  const agreeDeleteBtn = () => {
    if (ischecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
      setIsOpenAlert(false);
    }
  };

  const deleteBtn = () => {
    if (ischecked) {
      navigate(routePaths.Main);
    } else {
      setIsOpenAlert(true);
    }
  };

  return (
    <St.Root>
      <Header prevPage={routePaths.MyPage} />
      <St.TitleContainer>
        <St.Title>정말 피클을 떠나시는 건가요?</St.Title>
        <St.SubTitle>
          피클에서는 손쉽게 300여개의 대화주제를 만날 수 있어요
          <br /> 한 번 더 생각해보지 않으시겠어요?
        </St.SubTitle>
      </St.TitleContainer>
      <St.AgreeContainer>
        <St.AgreeTitle>
          계정을 삭제하면 투표 기록을 제외한 회원님의 모든 정보와 기록이
          <br /> 사라집니다. 삭제된 정보는 복구할 수 없으니 신중하게 결정해주세요
        </St.AgreeTitle>
        <St.AgreeCheck>
          <St.CheckBox type="button" onClick={agreeDeleteBtn}>
            {ischecked ? <IcSmallFullCheckBox /> : <IcSmallEmptyCheckBox />}
          </St.CheckBox>
          안내사항을 모두 확인했으며, 이에 동의합니다
        </St.AgreeCheck>
      </St.AgreeContainer>
      <St.FeedBackContainer>
        <St.FeedBackTitle>계정을 삭제하시는 이유가 궁금해요</St.FeedBackTitle>
        <St.FeedBackSubTitle>소중한 피드백을 바탕으로 더 나은 서비스를 만들기 위해 노력하겠습니다</St.FeedBackSubTitle>
        <St.FeedBackList>{feedBackLists}</St.FeedBackList>
      </St.FeedBackContainer>
      <St.ModalContainer isopen={isOpenAlert}>탈퇴 전 확인 항목에 동의해주세요</St.ModalContainer>
      <St.DeleteBtn onClick={deleteBtn}>탈퇴하기</St.DeleteBtn>
      <Footer />
    </St.Root>
  );
}