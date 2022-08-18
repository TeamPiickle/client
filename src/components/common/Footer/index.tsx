import React, { ReactElement } from "react";

import { St } from "./style";

interface ServiceInfo {
  title: string;
  detail: string | ReactElement;
}

const basicInfo = ["이용약관", "개인정보처리방침", "제휴/광고 문의"];
const serviceInfo: ServiceInfo[] = [
  {
    title: "Contact",
    detail: "leesh98@hanyang.ac.kr",
  },
  {
    title: "Info",
    detail: <a href="https://www.notion.so/piickle-a44992440f3b4e808a175f7fc1a4fe25">공식 노션 바로가기</a>,
  },
  {
    title: "Instagram",
    detail: <a href="https://www.instagram.com/piickle_official/">@piickle_official</a>,
  },
];

export default function Footer() {
  const basicInfoLists = basicInfo.map((info, index) => <St.BasicInfoTitle key={index}>{info}</St.BasicInfoTitle>);

  return (
    <St.Footer>
      <St.BasicInfo>{basicInfoLists}</St.BasicInfo>

      <St.ServiceInfo>
        {serviceInfo.map((info, index) => (
          <React.Fragment key={index}>
            <St.ServiceInfoTitle>{info.title}</St.ServiceInfoTitle>
            <St.ServiceInfoDetail>{info.detail}</St.ServiceInfoDetail>
          </React.Fragment>
        ))}
      </St.ServiceInfo>
    </St.Footer>
  );
}
