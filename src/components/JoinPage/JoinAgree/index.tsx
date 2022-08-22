import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { St } from "./style";

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState(0);
  //const [allPicked, setAllPicked] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);

  const [openAlert, setOpenAlert] = useState(false);

  function alertClassName() {
    if (openAlert === false) {
      return "login-alert";
    } else {
      // 경고창 띄우기
      // setOpenAlert(true);
      return "login-alert-view";
    }
  }

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
    // aLLClickCheckBox();
    setLists(currentList);
  }

  useEffect(() => {
    console.log(lists);

    if (lists[isPicked].state === false) {
      lists[isPicked].state = true;
      //lists[isPicked].checkBox = <IcFullCheckBox />;
    } else if (lists[isPicked].state === true) {
      lists[isPicked].state = false;
      //lists[isPicked].checkBox = <IcEmptyCheckBox />;
    }
    // button 활성화
    /*
    if (lists[1].state === true) {
      setActiveBtn(activeBtn + 1);
      console.log(activeBtn);
    } else if (lists[2].state === true) {
      setActiveBtn(activeBtn + 1);
      console.log(activeBtn);
    } else if (lists[1].state === false) {
      setActiveBtn(activeBtn - 1);
      console.log(activeBtn);
    } else if (lists[2].state === false) {
      setActiveBtn(activeBtn - 1);
      console.log(activeBtn);
    } else {
      setActiveBtn(activeBtn + 0);
      console.log(activeBtn);
    }
    */
  }, [isPicked, lists]);

  //  const aLLClickCheckBox = () => {
  //    const allCurrentList = [...lists];
  //
  //    if (allCurrentList[0].state === true) {
  //      console.log("모두 비동의");
  //      allCurrentList[1].state = false;
  //      allCurrentList[2].state = false;
  //      allCurrentList[3].state = false;
  //    } else {
  //      console.log("모두 동의");
  //      allCurrentList[1].state = true;
  //      allCurrentList[2].state = true;
  //      allCurrentList[3].state = true;
  //    }
  //  };
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
