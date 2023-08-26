import { useNavigate } from "react-router-dom";

import useAuth from "../../../core/hooks/useAuth";
import { routePaths } from "../../../core/routes/path";
import { externalLinks } from "../../../util/const/externalLinks";
import { St } from "./style";

const mySetting = [
  { text: "공지사항", link: externalLinks.NOTICE },
  { text: "문의", link: externalLinks.QUESTION_FORM },
  { text: "팀 정보", link: externalLinks.TEAM_INFO },
  { text: "로그아웃" },
  { text: "회원 탈퇴" },
];

export default function MySetting() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClickDetail = (key: string) => {
    switch (key) {
      case "로그아웃":
        logout();
        break;
      case "회원 탈퇴":
        navigate(routePaths.Delete);
        break;
    }
  };

  const mySettingList = mySetting.map((setting, index) => (
    <St.MySettingList key={`setting-${index}`}>
      <St.MySettingListDetail onClick={() => handleClickDetail(setting.text)}>
        {setting.link ? <a href={setting.link}>{setting.text}</a> : setting.text}
      </St.MySettingListDetail>
    </St.MySettingList>
  ));

  return <St.MySettingContainer>{mySettingList}</St.MySettingContainer>;
}
