import React, { useEffect, useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { St } from "./style";

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState(0);

  const [allPicked, setAllPicked] = useState(false);
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
    { id: 4, state: false, checkBox: <IcEmptyCheckBox />, text: "마케팅 활용/광고성 정부 수신동의 (선택)" },
  ]);

  function ChangeCheckBox(index: number) {
    const currentList = [...lists];
    setIsPicked(index);

    if (currentList[index].state === false) {
      currentList[index].checkBox = <IcFullCheckBox />;
    } else if (currentList[index].state === true) {
      currentList[index].checkBox = <IcEmptyCheckBox />;
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

  const agreeList = lists.map((item, index) => (
    <St.AgreeContentItem key={item.id}>
      <button type="button" onClick={() => ChangeCheckBox(index)}>
        {item.checkBox}
      </button>
      {item.text}
      <St.DetailBtn to="">{item.button}</St.DetailBtn>
      <St.Line>{item.line}</St.Line>
    </St.AgreeContentItem>
  ));

  return (
    <St.JoinAgree>
      <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
      <St.AgreeContent>{agreeList}</St.AgreeContent>
      <St.Button type="button">회원가입 완료하기</St.Button>
    </St.JoinAgree>
  );
}
