import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { St } from "./style";

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState(0);
  const [allPicked, setAllPicked] = useState(false);
  const [checkItems, setCheckItems] = useState([0]);
  const [openAlert, setOpenAlert] = useState(false);
  const [checkActive, setCheckActive] = useState<boolean>();

  const [lists, setLists] = useState([
    { id: 1, state: false, level: 1, checkBox: <IcEmptyCheckBox />, text: "약관 전체동의", line: <hr /> },
    {
      id: 2,
      state: false,
      level: 2,
      checkBox: <IcEmptyCheckBox />,
      text: "이용약관 동의 (필수)",
      button: <IcNextBtn />,
    },
    {
      id: 3,
      state: false,
      level: 2,
      checkBox: <IcEmptyCheckBox />,
      text: "개인정보 수집 및 이용동의 (필수)",
      button: <IcNextBtn />,
    },
    {
      id: 4,
      state: false,
      level: 3,
      checkBox: <IcEmptyCheckBox />,
      text: "마케팅 활용/광고성 정부 수신동의 (선택)",
      button: <IcNextBtn />,
    },
    { id: 5, state: false, level: 2, checkBox: <IcEmptyCheckBox />, text: "만 14세 이상입니다 (필수)" },
  ]);

  useEffect(() => {
    console.log(lists);
    console.log(lists[isPicked]);
    if (lists[isPicked].state === false) {
      lists[isPicked].state = true;
      setCheckActive(true);
    } else if (lists[isPicked].state === true) {
      lists[isPicked].state = false;
      setCheckActive(false);
    }
  }, [isPicked, lists]);

  function ChangeCheckBox(index: number) {
    const currentList = [...lists];
    setIsPicked(index);

    if (currentList[index].state === false) {
      currentList[index].checkBox = <IcFullCheckBox />;
      setCheckActive(false);
    } else if (currentList[index].state === true) {
      currentList[index].checkBox = <IcEmptyCheckBox />;
      setCheckActive(true);
    }
    alertClassName;
    setLists(currentList);
  }

  function alertClassName() {
    return openAlert === false ? "login-alert" : "login-alert-view";
  }

  useEffect(() => {
    const A = lists.filter((item) => item.level > 1).length;
    const B = lists.filter((item) => item.level > 1 && item.state === true).length;
    const C = lists.filter((item) => item.level === 2).length;
    const D = lists.filter((item) => item.level === 2 && item.state === true).length;
    return A === B || C === D ? setOpenAlert(false) : setOpenAlert(true);
  }, [lists]);

  const agreeList = lists.map((item, index) => (
    <St.AgreeContentItem key={item.id} className={"checkLists" + (item.state === true ? " active" : "")}>
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
      <St.ModalContainer className={alertClassName()}>이용약관에 동의해주세요</St.ModalContainer>
      <St.JoinButton>회원가입 완료하기</St.JoinButton>
    </St.JoinAgree>
  );
}
