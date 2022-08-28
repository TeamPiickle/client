import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
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
  const [openAlert, setOpenAlert] = useState(false);
  const [isPickedItems, setIsPickedItems] = useState([
    { id: "all", state: false },
    { id: "first", state: false },
    { id: "second", state: false },
    { id: "third", state: false },
    { id: "fourth", state: false },
  ]);

  useEffect(() => {
    console.log(isPickedItems);
    isPickedItems[isPicked].state ? (isPickedItems[isPicked].state = false) : (isPickedItems[isPicked].state = true);
  }, [isPicked, isPickedItems]);

  function ChangeCheckBox(index: number) {
    const currentList = [...isPickedItems];
    setIsPicked(index);

    currentList[index].state
      ? (agreeListContents[index].checkBox = <IcEmptyCheckBox />)
      : (agreeListContents[index].checkBox = <IcFullCheckBox />);

    alertClassName;
    setIsPickedItems(currentList);
  }

  const alertClassName = openAlert === false ? "login-alert" : "login-alert-view";

  useEffect(() => {
    const A = agreeListContents.filter((item) => item.level > 1).length;
    const B = agreeListContents.filter((item) => item.level > 1 && isPickedItems[item.id - 1].state === true).length;
    const C = agreeListContents.filter((item) => item.level === 2).length;
    const D = agreeListContents.filter((item) => item.level === 2 && isPickedItems[item.id - 1].state === true).length;
    return A === B || C === D ? setOpenAlert(false) : setOpenAlert(true);
  }, [isPickedItems, openAlert]);

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

  return (
    <St.JoinAgree>
      <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
      <St.AgreeContent>{agreeList}</St.AgreeContent>
      <St.ModalContainer className={alertClassName}>이용약관에 동의해주세요</St.ModalContainer>
      <St.JoinButton>회원가입 완료하기</St.JoinButton>
    </St.JoinAgree>
  );
}
