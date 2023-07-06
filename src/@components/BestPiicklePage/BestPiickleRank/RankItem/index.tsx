import React, { useState } from "react";

import IcBookmarkCheck_16_20 from "../../../../asset/icon/IcBookmarkCheck_16_20";
import { cardCollectionApi } from "../../../../core/api/cardCollection";
import { LocationType } from "../../../../types/cardCollection";
import useNavigateCardCollection, {
  NavigateCardCollectionBookMarkType,
} from "../../../@common/hooks/useNavigateCardCollection";
import * as St from "./style";

interface RankItemProps {
  cardId: string;
  content: string;
  idx: number;
}

export default function RankItem(props: RankItemProps) {
  const { cardId, content, idx } = props;

  const navigateCardCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBookMarkType;

  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    //cardCollectionApi.addNDeleteBookmark(cardId);
  };

  return (
    <St.RankItemContainer>
      <St.RankItemContent>
        <St.RankItemNumber idx={idx}>{idx}</St.RankItemNumber>
        <St.RankItemText>{content}</St.RankItemText>
      </St.RankItemContent>
      <St.BookmarkWrapper onClick={toggleBookmark}>
        <IcBookmarkCheck_16_20 isChecked={isBookmarked} />
      </St.BookmarkWrapper>
      <St.RankItemLink type="button" onClick={() => navigateCardCollection(idx)} />
    </St.RankItemContainer>
  );
}
