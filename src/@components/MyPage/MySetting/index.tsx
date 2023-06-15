import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { userTokenSelector } from "../../../core/atom/auth";
import { routePaths } from "../../../core/routes/path";
import { St } from "./style";

const mySetting = [
  { text: "공지사항", link: "https://joyous-ghost-8c7.notion.site/75f55feef4034c06975c2d2e2b54ebe2" },
  { text: "문의", link: "https://forms.gle/uJG7xNzuZvGcAU1w6" },
  { text: "팀 정보", link: "https://www.notion.so/5a82a03cd5214b12ac28a00d8fd5b66c" },
  { text: "로그아웃" },
  { text: "회원 탈퇴" },
];

export default function MySetting() {
  const setUserToken = useSetRecoilState(userTokenSelector);
  const navigate = useNavigate();

  const handleClickDetail = (key: string) => {
    switch (key) {
      case "로그아웃":
        setUserToken("");
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
