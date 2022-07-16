import { St } from "./style";

export default function Footer() {
  return (
    <St.Footer>
      <St.BasicInfo>
        <St.BasicInfoTitle>이용약관</St.BasicInfoTitle>
        <St.BasicInfoTitle>개인정보처리방침</St.BasicInfoTitle>
        <St.BasicInfoTitle>제휴/광고 문의</St.BasicInfoTitle>
      </St.BasicInfo>
      <St.ServiceInfo>
        <St.ServiceInfoTitle>Contact</St.ServiceInfoTitle>
        <St.ServiceInfoDetail>vvayun@naver.com</St.ServiceInfoDetail>
        <St.ServiceInfoTitle>Info</St.ServiceInfoTitle>
        <St.ServiceInfoDetail>공식 노션 바로가기</St.ServiceInfoDetail>
        <St.ServiceInfoTitle>Instagram</St.ServiceInfoTitle>
        <St.ServiceInfoDetail>official_sodam</St.ServiceInfoDetail>
      </St.ServiceInfo>
    </St.Footer>
  );
}
