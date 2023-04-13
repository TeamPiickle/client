import { routePaths } from "../../../../core/routes/path";
import St from "./style";

export default function HeaderMinVer() {
  return (
    <St.Header>
      <St.Link to={routePaths.BookmarkPage}>마이 피클 리스트 보기</St.Link>
      <St.Link to={routePaths.Category}>대화 카테고리 보기</St.Link>
    </St.Header>
  );
}
