import React from "react";

import { St } from "./style";

export default function Footer() {
  const basicInfo = ["이용약관", "개인정보처리방침", "제휴/광고 문의"];
  const basicInfoList = basicInfo.map((info, index) => <St.BasicInfoTitle key={index}>{info}</St.BasicInfoTitle>);

  type serviceInfo = {
    title: string;
    detail: string;
  };

  const ServiceInfo: serviceInfo[] = [
    {
      title: "Contact",
      detail: "vvayun@naver.com",
    },
    {
      title: "Info",
      detail: "공식 노션 바로가기",
    },
    {
      title: "Instagram",
      detail: "official_sodam",
    },
  ];

  return (
    <St.Footer>
      <St.BasicInfo>{basicInfoList}</St.BasicInfo>

      <St.ServiceInfo>
        {ServiceInfo.map((info, index) => (
          <React.Fragment key={index}>
            <St.ServiceInfoTitle>{info.title}</St.ServiceInfoTitle>
            <St.ServiceInfoDetail>{info.detail}</St.ServiceInfoDetail>
          </React.Fragment>
        ))}
      </St.ServiceInfo>
    </St.Footer>
  );
}
