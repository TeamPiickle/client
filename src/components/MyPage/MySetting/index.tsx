import { St } from "./style";

export default function MySetting() {
  const mySetting = ["공지사항", "문의", "팀 정보", "로그아웃", "회원 탈퇴"];
  const mySettingList = mySetting.map((setting, index) => <St.MySettingList key={index}>{setting}</St.MySettingList>);

  return <St.MySettingContainer>{mySettingList}</St.MySettingContainer>;
}
