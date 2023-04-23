import { routePaths } from "../../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import St from "./style";

export default function HeaderMinVer() {
  return (
    <St.Header>
      <St.Link to={routePaths.BookmarkPage} className={GTM_CLASS_NAME.cardMoveBookmark}>
        마이 피클 리스트 보기
      </St.Link>
      <St.Link to={routePaths.Main} className={GTM_CLASS_NAME.cardMoveHome}>
        홈으로 가기
      </St.Link>
    </St.Header>
  );
}
