import { useState } from "react";

import IcBookmarkCheck_16_20 from "../../../asset/icon/IcBookmarkCheck_16_20";
import { cardCollectionApi } from "../../../core/api/cardCollection";
import { LocationType } from "../../../types/cardCollection";
import useNavigateCardCollection, {
  NavigateCardCollectionBookMarkType,
} from "../../@common/hooks/useNavigateCardCollection";
import { St } from "./style";

interface MyPiickleItemProps {
  cardId: string;
  content: string;
  idx: number;
}

export default function MyPiickleItem(props: MyPiickleItemProps) {
  const { cardId, content, idx } = props;

  const navigateCardCollection = useNavigateCardCollection(LocationType.BOOKMARK) as NavigateCardCollectionBookMarkType;

  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    cardCollectionApi.addNDeleteBookmark(cardId);
  };

  return (
    <St.MyPiickle>
      <St.MyPiickleContent>{content}</St.MyPiickleContent>
      <St.HeartWrapper onClick={toggleBookmark}>
        <IcBookmarkCheck_16_20 isChecked={isBookmarked} />
      </St.HeartWrapper>
      <St.MyPiickleLink type="button" onClick={() => navigateCardCollection(idx)} />
    </St.MyPiickle>
  );
}
