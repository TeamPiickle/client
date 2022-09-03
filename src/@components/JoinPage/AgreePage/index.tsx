import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { St } from "./style";

const agreeListsContents = [
  { text: "약관 전체동의", line: <hr /> },
  {
    text: "이용약관 동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    text: "개인정보 수집 및 이용동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    text: "마케팅 활용/광고성 정부 수신동의 (선택)",
    button: <IcNextBtn />,
  },
  { text: "만 14세 이상입니다 (필수)", button: <IcNextBtn /> },
];

export default function AgreePage() {
  const navigate = useNavigate();

  const [isPickedItems, setIsPickedItems] = useState<boolean[]>([false, false, false, false, false]);

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const completeJoinBtn = () => {
    !isOpenAlert && navigate(routePaths.Login);

    // TODO :: 회원가입 POST 통신
  };

  function handleChecking(index: number) {
    switch (index) {
      case 0:
        setIsPickedItems((prevItems) => [...prevItems].fill(isPickedItems[0] ? false : true));
        break;

      default:
        setIsPickedItems((prevItems) => {
          const currentItems = [...prevItems];
          currentItems[index] = !currentItems[index];
          return checkAllItems(currentItems);
        });
        break;
    }
  }

  const checkAllItems = (_items: boolean[]) => {
    const noCheckedItemIndex = _items.slice(1).find((el) => el === false);

    switch (noCheckedItemIndex) {
      case undefined:
        _items[0] = true;
        break;
      default:
        _items[0] = false;
        break;
    }

    return _items;
  };

  const agreeLists = agreeListsContents.map((item, index) => (
    <St.AgreeContentItem key={`condition-${index}`} isActive={isPickedItems[index]}>
      <St.CheckBox type="button" onClick={() => handleChecking(index)}>
        {isPickedItems[index] ? <IcFullCheckBox /> : <IcEmptyCheckBox />}
      </St.CheckBox>
      {item.text}
      <St.DetailButton to="">{item.button}</St.DetailButton>
      <St.Line>{item.line}</St.Line>
    </St.AgreeContentItem>
  ));

  return (
    <St.Root>
      <Header prevPage={prevPages[5].prevPage} />
      <PageProgressBar rate={progressRate[4].rate} />
      <St.JoinAgree>
        <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
        <St.AgreeContent>{agreeLists}</St.AgreeContent>
        <St.ModalContainer isopen={isOpenAlert}>필수 항목에 동의해주세요</St.ModalContainer>
        <St.JoinButton onClick={completeJoinBtn}>회원가입 완료하기</St.JoinButton>
      </St.JoinAgree>
      <Footer />
    </St.Root>
  );
}