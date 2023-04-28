import { LocationType } from "../../../types/cardCollection";
import useNavigateCardCollection, {
  NavigateCardCollectionBestType,
} from "../../@common/hooks/useNavigateCardCollection";
import * as St from "./style";

export default function EmptyItem() {
  const navigateCardCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBestType;

  return (
    <St.Root>
      <St.IcImageSearch />
      <St.Desc>아직 북마크한 대화 주제가 없어요 </St.Desc>
      <St.Desc>마음에 드는 대화주제를 북마크해보세요</St.Desc>
      <St.LinkBestPiickle onClick={() => navigateCardCollection()}>
        가장 인기있는 대화주제 보러가기 →
      </St.LinkBestPiickle>
    </St.Root>
  );
}
