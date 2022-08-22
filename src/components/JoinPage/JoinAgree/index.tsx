import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { St } from "./style";

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState(0);
  const [allPicked, setAllPicked] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);

  const [checkItems, setCheckItems] = useState([0]);

  const [openAlert, setOpenAlert] = useState(false);

  const [lists, setLists] = useState([
    { id: 1, state: false, checkBox: <IcEmptyCheckBox />, text: "약관 전체동의", line: <hr /> },
    { id: 2, state: false, checkBox: <IcEmptyCheckBox />, text: "이용약관 동의 (필수)", button: <IcNextBtn /> },
    {
      id: 3,
      state: false,
      checkBox: <IcEmptyCheckBox />,
      text: "개인정보 수집 및 이용동의 (필수)",
      button: <IcNextBtn />,
    },
    {
      id: 4,
      state: false,
      checkBox: <IcEmptyCheckBox />,
      text: "마케팅 활용/광고성 정부 수신동의 (선택)",
      button: <IcNextBtn />,
    },
    { id: 5, state: false, checkBox: <IcEmptyCheckBox />, text: "만 14세 이상입니다 (필수)" },
  ]);
  function ChangeCheckBox(index: number) {
    const currentList = [...lists];
    setIsPicked(index);

    if (currentList[index].state === false) {
      currentList[index].checkBox = <IcFullCheckBox />;
    } else if (currentList[index].state === true) {
      currentList[index].checkBox = <IcEmptyCheckBox />;
    }

    handleAllCheck(currentList[index].state);

    if (checkItems.length === 5) {
      console.log("반영확인1");
      CheckAllPicked();
    } else {
      console.log("반영확인2");
      currentList[0].checkBox = <IcFullCheckBox />;
      CheckAllPicked();
    }
    if (currentList[index].id === 1) {
      console.log(currentList[index].state);
      console.log(checkItems);

      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
    }
    setLists(currentList);
  }

  useEffect(() => {
    console.log(lists);
    if (lists[isPicked].state === false) {
      lists[isPicked].state = true;
    } else if (lists[isPicked].state === true) {
      lists[isPicked].state = false;
    }
  }, [isPicked, lists]);

  function CheckAllPicked() {
    const currentList = [...lists];

    if (allPicked === false) {
      currentList[0].checkBox = <IcFullCheckBox />;
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
      currentList[0].checkBox = <IcEmptyCheckBox />;
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
  /* 계속 하던거
  function checkAllStatus() {
    //const { termsOfService, privacyPolicy, allowPromotions } = agreements;
    //lists[1].state === true && lists[2].state === true && lists[3].state === true
    if (lists[1].state && lists[2].state && lists[3].state && lists[4].state) {
      setAllPicked(false);
      CheckAllPicked();

      console.log("모두 동의");
    } else {
      setAllPicked(true);
      CheckAllPicked();

      console.log("모두 비동의");
    }
  }
*/
  /*
  useEffect(() => {
    if (lists[1].state === true && lists[2].state === true && lists[3].state === true) {
      setAllPicked(true);
      lists[0].state === true;
    } else if (lists[0].state === true) {
      setAllPicked(true);
      lists[0].state === true;
    } else {
      setAllPicked(false);
      lists[0].state === false;
    }
  }, [lists]);
*/
  // function aLLClickCheckBox1() {
  //   const currentList = [...lists];
  //   console.log(currentList[1].state && currentList[2].state && currentList[3].state);
  //   if (currentList[1].state === true && currentList[2].state === true && currentList[3].state === true) {
  //     currentList[0].checkBox = <IcFullCheckBox />;
  //     currentList[0].state === true;
  //     setAllPicked(true);
  //   } else if (currentList[0].state === true) {
  //     setAllPicked(true);
  //     currentList[1].checkBox = <IcFullCheckBox />;
  //     currentList[2].checkBox = <IcFullCheckBox />;
  //     currentList[3].checkBox = <IcFullCheckBox />;
  //     currentList[1].state === true && currentList[2].state === true && currentList[3].state === true;
  //   } else if (currentList[0].state === false) {
  //     setAllPicked(false);
  //     currentList[1].checkBox = <IcEmptyCheckBox />;
  //     currentList[2].checkBox = <IcEmptyCheckBox />;
  //     currentList[3].checkBox = <IcEmptyCheckBox />;
  //     currentList[1].state === false && currentList[2].state === false && currentList[3].state === false;
  //   } else if ((currentList[0].checkBox = <IcEmptyCheckBox />)) {
  //     setAllPicked(false);
  //   }
  // }

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: Array<number> = [];
      lists.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

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
      // 경고창 띄우기
      // setOpenAlert(true);
      return "login-alert-view";
    }
    // return openAlert === false ? "login-alert" : "login-alert-view";
  }

  useEffect(() => {
    console.log("좀..");
  }, [setOpenAlert]);

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
