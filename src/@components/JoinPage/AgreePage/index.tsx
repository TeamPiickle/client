import React, { useEffect, useState } from "react";
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
  { id: 1, level: 1, text: "약관 전체동의", line: <hr /> },
  {
    id: 2,
    level: 2,
    text: "이용약관 동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    id: 3,
    level: 2,
    text: "개인정보 수집 및 이용동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    id: 4,
    level: 3,
    text: "마케팅 활용/광고성 정부 수신동의 (선택)",
    button: <IcNextBtn />,
  },
  { id: 5, level: 2, text: "만 14세 이상입니다 (필수)", button: <IcNextBtn /> },
];

export default function AgreePage() {
  const navigate = useNavigate();

  const [isPickedItems, setIsPickedItems] = useState([false, false, false, false, false]);
  const [isAllPicked, setAllIsPicked] = useState(false);

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const completeJoinBtn = () => {
    !isOpenAlert && navigate(routePaths.Login);
  };

  // useEffect(() => {
  //   const currentList = [...isPickedItems];
  //   if (isPicked === 0) {
  //     for (let i = 1; i <= 4; i++) {
  //       if (isPickedItems[0].state) {
  //         currentList[i].state = false;
  //       } else {
  //         currentList[i].state = true;
  //       }
  //     }
  //   }
  //   isPickedItems[isPicked].state ? (currentList[isPicked].state = false) : (currentList[isPicked].state = true);
  // }, [isPicked, isPickedItems]);

  function handleChecking(index: number) {
    switch (index) {
      case 0:
        break;

      default:
        setIsPickedItems((prevItems) => {
          const currentItems = [...prevItems];
          currentItems[index] = !currentItems[index];
          return currentItems;
        });
        break;
    }
  }

  // const AllCheck =
  //   isAllPicked === true
  //     ? (agreeListsContents[0].checkBox = <IcFullCheckBox />) && (isPickedItems[0].state = true)
  //     : (agreeListsContents[0].checkBox = <IcEmptyCheckBox />) && (isPickedItems[0].state = false);

  // useEffect(() => {
  //   const all = agreeListsContents.filter((item) => item.level > 1).length;
  //   const trueAll = agreeListsContents.filter(
  //     (item) => item.level > 1 && isPickedItems[item.id - 1].state === true,
  //   ).length;
  //   const required = agreeListsContents.filter((item) => item.level === 2).length;
  //   const trueRequired = agreeListsContents.filter(
  //     (item) => item.level === 2 && isPickedItems[item.id - 1].state === true,
  //   ).length;

  //   all === trueAll ? setAllIsPicked(true) : setAllIsPicked(false);
  //   all === trueAll || required === trueRequired ? setIsOpenAlert(false) : setIsOpenAlert(true);
  // }, [isPickedItems, isOpenAlert, isAllPicked]);

  const agreeLists = agreeListsContents.map((item, index) => (
    <St.AgreeContentItem key={item.id} isActive={isPickedItems[index]}>
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
