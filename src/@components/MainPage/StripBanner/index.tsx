import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import St from "./style";

export default function StripBanner() {
  const navigate = useNavigate();

  return (
    <St.Container
      onClick={() => {
        navigate(routePaths.Login);
      }}>
      <St.Content>회원가입을 하면 더 즐겁게 피클을 이용할 수 있어요</St.Content>
      <St.SubContent>로그인 이후 북마크 기능인 ‘마이피클’과 투표 기능인 ‘피클미’를 이용해보세요</St.SubContent>
    </St.Container>
  );
}
