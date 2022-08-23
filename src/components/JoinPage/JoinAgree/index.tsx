import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { St } from "./style";

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState(0);
  const [allPicked, setAllPicked] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);

  const [checkItems, setCheckItems] = useState([0]);
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

  function ChangeCheckBox(index: number) {
    const currentList = [...lists];

    if (currentList[index].state === false) {
      currentList[index].checkBox = <IcFullCheckBox />;
    } else if (currentList[index].state === true) {
      currentList[index].checkBox = <IcEmptyCheckBox />;
    }

    handleAllCheck(currentList[0].state);
    CheckAllPicked();

    // if (currentList[0].state) {
    //   CheckAllPicked();
    //
    //   if (checkItems.length != 4) {
    //     console.log("1");
    //     handleAllCheck(false);
    //   } else {
    //     console.log("2");
    //     handleAllCheck(true);
    //     console.log("배열 길이", checkItems.length);
    //   }
    // }

    setLists(currentList);
  }

  function CheckAllPicked() {
    const currentList = [...lists];

    if (allPicked === false) {
      //currentList[0].checkBox = <IcFullCheckBox />;
      currentList[1].checkBox = <IcFullCheckBox />;
      currentList[2].checkBox = <IcFullCheckBox />;
      currentList[3].checkBox = <IcFullCheckBox />;
      currentList[4].checkBox = <IcFullCheckBox />;
      //currentList[0].state = true;
      currentList[1].state = true;
      currentList[2].state = true;
      currentList[3].state = true;
      currentList[4].state = true;
    } else {
      //currentList[0].checkBox = <IcEmptyCheckBox />;
      currentList[1].checkBox = <IcEmptyCheckBox />;
      currentList[2].checkBox = <IcEmptyCheckBox />;
      currentList[3].checkBox = <IcEmptyCheckBox />;
      currentList[4].checkBox = <IcEmptyCheckBox />;
      //currentList[0].state = false;
      currentList[1].state = false;
      currentList[2].state = false;
      currentList[3].state = false;
      currentList[4].state = false;
    }
  }

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: Array<number> = [];
      lists.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
      setAllPicked(true);
      console.log("배열 길이", checkItems.length);
    } else {
      setCheckItems([]);
      setAllPicked(false);
    }
  };

  // const [openAlert, setOpenAlert] = useState(false);
  // State 이용하면 무한루프에 갇힘 왜?
  function alertClassName() {
    const currentList = [...lists];
    let alert = false;
    if (currentList[0].state === false) {
      //setOpenAlert(false);
      alert = false;
    } else if (currentList[1].state === false && currentList[2].state === false && currentList[4].state === false) {
      //setOpenAlert(false);
      alert = false;
    } else {
      //setOpenAlert(true);
      alert = true;
    }
    if (alert === false) {
      return "login-alert";
    } else {
      // setOpenAlert(true);
      return "login-alert-view";
    }
    // return openAlert === false ? "login-alert" : "login-alert-view";
  }

  useEffect(() => {
    console.log(lists);
    if (lists[isPicked].state === false) {
      lists[isPicked].state = true;
    } else if (lists[isPicked].state === true) {
      lists[isPicked].state = false;
    }
  }, [isPicked, lists]);

  const agreeList = lists.map((item, index) => (
    <St.AgreeContentItem key={item.id}>
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

// className={`${activeBtn >= 2 ? "active" : ""}`}
// onClick={() => (location.href = "")
