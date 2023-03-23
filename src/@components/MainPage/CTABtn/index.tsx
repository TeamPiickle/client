import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useNavigateCardCollection, {
  NavigateCardCollectionAllType,
} from "../../@common/hooks/useNavigateCardCollection";
import { St } from "./style";

export default function CTABtn() {
  const navigateCardCollection = useNavigateCardCollection(LocationType.ALL) as NavigateCardCollectionAllType;

  return (
    <St.Button type="button" onClick={() => navigateCardCollection()} className={GTM_CLASS_NAME.mainCTABtn}>
      대화주제 추천 바로가기
    </St.Button>
  );
}
