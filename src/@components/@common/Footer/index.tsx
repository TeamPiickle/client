import React, { ReactElement } from "react";

import { St } from "./style";

interface ServiceInfo {
  title: string;
  detail: string | ReactElement;
}

const basicInfo = [
  { text: "이용약관", link: "https://joyous-ghost-8c7.notion.site/bc0872dc420d44f4851c5969f933db0b" },
  { text: "개인정보처리방침", link: "https://www.notion.so/0525fb9e664f4ce4a317cef1e7abdcd3" },
  { text: "서비스 피드백", link: "https://forms.gle/cDybnShCkaX2aXok8" },
];
const serviceInfo: ServiceInfo[] = [
  {
    title: "Contact",
    detail: "leesh98@hanyang.ac.kr",
  },
  {
    title: "Info",
    detail: <a href="https://www.notion.so/Piickle-f05fdd0eb67041ebb28aa39c64a268ef">공식 노션 바로가기</a>,
  },
  {
    title: "Instagram",
    detail: <a href="https://www.instagram.com/piickle_official/">@piickle_official</a>,
  },
];

export default function Footer() {
  const basicInfoLists = basicInfo.map((info, index) => (
    <St.BasicInfoTitle key={`title-${index}`}>
      <a href={info.link}>{info.text}</a>
    </St.BasicInfoTitle>
  ));

  return (
    <St.Footer>
      <St.BasicInfo>{basicInfoLists}</St.BasicInfo>

      <St.ServiceInfo>
        {serviceInfo.map((info, index) => (
          <React.Fragment key={`service-${index}`}>
            <St.ServiceInfoTitle>{info.title}</St.ServiceInfoTitle>
            <St.ServiceInfoDetail>{info.detail}</St.ServiceInfoDetail>
          </React.Fragment>
        ))}
      </St.ServiceInfo>
    </St.Footer>
  );
}
