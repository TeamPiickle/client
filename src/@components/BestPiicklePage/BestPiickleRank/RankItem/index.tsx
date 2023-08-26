import IcBookmarkCheck_16_20 from "../../../../asset/icon/IcBookmarkCheck_16_20";
import { LocationType } from "../../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useNavigateCardCollection, {
  NavigateCardCollectionBookMarkType,
} from "../../../@common/hooks/useNavigateCardCollection";
import useCardBookmark from "../../../CardCollectionPage/hooks/useCardBookmark";
import * as St from "./style";
interface RankItemProps {
  onClickLogoutBookmark: () => void;
  cardId: string;
  content: string;
  rank: number;
  isBookmark: boolean;
}

export default function RankItem(props: RankItemProps) {
  const { cardId, content, rank, isBookmark, onClickLogoutBookmark } = props;

  const navigateRankCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBookMarkType;

  const { isBookmarked, handleClickBookmark } = useCardBookmark(isBookmark, onClickLogoutBookmark);

  return (
    <St.RankItemContainer>
      <St.RankItemContent>
        <St.RankItemNumber idx={rank}>{rank + 1}</St.RankItemNumber>
        <St.RankItemText onClick={() => navigateRankCollection(rank)}>{content}</St.RankItemText>
      </St.RankItemContent>
      <St.BookmarkWrapper className={GTM_CLASS_NAME.bestBookmark} onClick={() => handleClickBookmark(cardId)}>
        <IcBookmarkCheck_16_20 className={GTM_CLASS_NAME.bestBookmark} isChecked={isBookmarked} />
      </St.BookmarkWrapper>
    </St.RankItemContainer>
  );
}
