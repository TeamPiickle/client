import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useNavigateCardCollection, { NavigateCardCollectionAllType } from "../hooks/useNavigateCardCollection";
import HeadlessCTAButton from "./HeadlessCTAButton";

export default function CTABtn() {
  const navigateCardCollection = useNavigateCardCollection(LocationType.ALL) as NavigateCardCollectionAllType;

  return (
    <HeadlessCTAButton type="button" onClick={() => navigateCardCollection()} className={GTM_CLASS_NAME.mainCTABtn}>
      대화주제 추천 바로가기
    </HeadlessCTAButton>
  );
}
