import { routePaths } from "../../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import St from "./style";

export default function HeaderMinVer() {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  return (
    <St.Header>
      {LOGIN_STATE && <St.Link to={routePaths.BookmarkPage} className={GTM_CLASS_NAME.cardMoveBookmark}>MY 피클</St.Link>}
      <St.Link to={routePaths.Main} className={GTM_CLASS_NAME.cardMoveHome}>홈으로 가기</St.Link>
    </St.Header>
  );
}
