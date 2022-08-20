import React, { useState } from "react";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { St } from "./style";

export default function JoinAgree() {
  const [isPicked, setIsPicked] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [allPicked, setAllPicked] = useState(false);

  const [lists, setLists] = useState([
    { id: 1, checkBox: <IcEmptyCheckBox />, text: "약관 전체동의", line: <hr /> },
    { id: 2, checkBox: <IcEmptyCheckBox />, text: "이용약관 동의 (필수)", button: <IcNextBtn /> },
    { id: 3, checkBox: <IcEmptyCheckBox />, text: "개인정보 수집 및 이용동의 (필수)", button: <IcNextBtn /> },
    { id: 4, checkBox: <IcEmptyCheckBox />, text: "마케팅 활용/광고성 정부 수신동의 (선택)" },
  ]);

  const agreeList = lists.map((item) => (
    <St.AgreeContentItem key={item.id}>
      {item.checkBox} {item.text} {item.button} {item.line}
    </St.AgreeContentItem>
  ));

  return (
    <St.JoinAgree>
      <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
      <St.AgreeContent>{agreeList}</St.AgreeContent>
    </St.JoinAgree>
  );
}

/*
        <St.AllAgree>약관 전체동의</St.AllAgree>
        <hr />
        <St.AgreeListFisrt>
          <St.AgreeListContent>이용약관 동의 (필수)</St.AgreeListContent>
          <button></button>
        </St.AgreeListFisrt>
        <St.AgreeListSecond>
          <St.AgreeListContent>개인정보 수집 및 이용동의 (필수)</St.AgreeListContent>
          <button></button>
        </St.AgreeListSecond>
        <St.AgreeListThird>
          <St.AgreeListContent>마케팅 활용/광고성 정부 수신동의 (선택)</St.AgreeListContent>
        </St.AgreeListThird>
*/
