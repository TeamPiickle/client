import { routePaths } from "../../../../core/routes/path";
import St from "./style";

export default function HeaderMinVer() {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  return (
    <St.Header>
      {LOGIN_STATE && <St.Link to={routePaths.BookmarkPage}>MY 피클</St.Link>}
      <St.Link to={routePaths.Main}>홈으로 가기</St.Link>
    </St.Header>
  );
}
