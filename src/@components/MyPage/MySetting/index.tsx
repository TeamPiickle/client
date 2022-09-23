import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import { St } from "./style";

const mySetting = [
  { text: "공지사항", link: "https://joyous-ghost-8c7.notion.site/6fff280c12ab4cc295cd94495be81099" },
  { text: "문의", link: "https://forms.gle/uJG7xNzuZvGcAU1w6" },
  { text: "팀 정보", link: "https://www.notion.so/5a82a03cd5214b12ac28a00d8fd5b66c" },
  { text: "로그아웃" },
  { text: "회원 탈퇴" },
];

export default function MySetting() {
  const navigate = useNavigate();
  const handleClickDetail = (key: string) => {
    switch (key) {
      case "로그아웃":
        localStorage.removeItem("piickle-token");
        navigate(routePaths.Main);
        break;
      case "회원 탈퇴":
        navigate(routePaths.Delete);
        break;
    }
  };

  const mySettingList = mySetting.map((setting, index) => (
    <St.MySettingList key={index}>
      <St.MySettingListDetail onClick={() => handleClickDetail(setting.text)}>
        {setting.link ? <a href={setting.link}>{setting.text}</a> : setting.text}
      </St.MySettingListDetail>
    </St.MySettingList>
  ));

  return <St.MySettingContainer>{mySettingList}</St.MySettingContainer>;
}
