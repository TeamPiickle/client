import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
// import { prevPages } from "../../../core/join/prevPages";
// import { progressRate } from "../../../core/join/progressRate";
import Footer from "../../@common/Footer";
// import PageProgressBar from "../common/PageProgressBar";
// import Header from "../common/Header";
import { St } from "./style";

const agreeListContents = [
  { id: 1, level: 1, checkBox: <IcEmptyCheckBox />, text: "약관 전체동의", line: <hr /> },
  {
    id: 2,
    level: 2,
    checkBox: <IcEmptyCheckBox />,
    text: "이용약관 동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    id: 3,
    level: 2,
    checkBox: <IcEmptyCheckBox />,
    text: "개인정보 수집 및 이용동의 (필수)",
    button: <IcNextBtn />,
  },
  {
    id: 4,
    level: 3,
    checkBox: <IcEmptyCheckBox />,
    text: "마케팅 활용/광고성 정부 수신동의 (선택)",
    button: <IcNextBtn />,
  },
  { id: 5, level: 2, checkBox: <IcEmptyCheckBox />, text: "만 14세 이상입니다 (필수)", button: <IcNextBtn /> },
];

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState(0);
  const [isAllPicked, setAllIsPicked] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isPickedItems, setIsPickedItems] = useState([
    { id: "all", state: false },
    { id: "first", state: false },
    { id: "second", state: false },
    { id: "third", state: false },
    { id: "fourth", state: false },
  ]);

  useEffect(() => {
    if (isPicked === 0) {
      for (let i = 1; i <= 4; i++) {
        if (isPickedItems[0].state) {
          isPickedItems[i].state = false;
        } else {
          isPickedItems[i].state = true;
        }
      }
    }
    isPickedItems[isPicked].state ? (isPickedItems[isPicked].state = false) : (isPickedItems[isPicked].state = true);
  }, [isPicked, isPickedItems]);

  function ChangeCheckBox(index: number) {
    const currentList = [...isPickedItems];
    setIsPicked(index);

    currentList[index].state
      ? (agreeListContents[index].checkBox = <IcEmptyCheckBox />)
      : (agreeListContents[index].checkBox = <IcFullCheckBox />);

    if (index === 0) {
      currentList[0].state
        ? (agreeListContents[1].checkBox = <IcEmptyCheckBox />) &&
          (agreeListContents[2].checkBox = <IcEmptyCheckBox />) &&
          (agreeListContents[3].checkBox = <IcEmptyCheckBox />) &&
          (agreeListContents[4].checkBox = <IcEmptyCheckBox />)
        : (agreeListContents[1].checkBox = <IcFullCheckBox />) &&
          (agreeListContents[2].checkBox = <IcFullCheckBox />) &&
          (agreeListContents[3].checkBox = <IcFullCheckBox />) &&
          (agreeListContents[4].checkBox = <IcFullCheckBox />);
    }

    AllCheck;
    alertClassName;
    setIsPickedItems(currentList);
  }

  const AllCheck =
    isAllPicked === true
      ? (agreeListContents[0].checkBox = <IcFullCheckBox />) && (isPickedItems[0].state = true)
      : (agreeListContents[0].checkBox = <IcEmptyCheckBox />) && (isPickedItems[0].state = false);

  const alertClassName = isOpenAlert === false ? "login-alert" : "login-alert-view";

  useEffect(() => {
    const All = agreeListContents.filter((item) => item.level > 1).length;
    const TrueAll = agreeListContents.filter(
      (item) => item.level > 1 && isPickedItems[item.id - 1].state === true,
    ).length;
    const Required = agreeListContents.filter((item) => item.level === 2).length;
    const TrueRequired = agreeListContents.filter(
      (item) => item.level === 2 && isPickedItems[item.id - 1].state === true,
    ).length;

    All === TrueAll ? setAllIsPicked(true) : setAllIsPicked(false);
    All === TrueAll || Required === TrueRequired ? setIsOpenAlert(false) : setIsOpenAlert(true);
  }, [isPickedItems, isOpenAlert, isAllPicked]);

  const agreeList = agreeListContents.map((item, index) => (
    <St.AgreeContentItem
      key={item.id}
      className={"checkLists" + (isPickedItems[index].state === true ? " active" : "")}>
      <St.CheckBox type="button" onClick={() => ChangeCheckBox(index)}>
        {item.checkBox}
      </St.CheckBox>
      {item.text}
      <St.DetailButton to="">{item.button}</St.DetailButton>
      <St.Line>{item.line}</St.Line>
    </St.AgreeContentItem>
  ));

  // <Header prevPage={prevPages[0].prevPage} />
  // <PageProgressBar rate={progressRate[0].rate} />

  return (
    <St.Root>
      <St.JoinAgree>
        <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
        <St.AgreeContent>{agreeList}</St.AgreeContent>
        <St.ModalContainer className={alertClassName}>필수 항목에 동의해주세요</St.ModalContainer>
        <St.JoinButton>회원가입 완료하기</St.JoinButton>
      </St.JoinAgree>
      <Footer />
    </St.Root>
  );
}
