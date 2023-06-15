import { useState } from "react";
import { useRecoilValue } from "recoil";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import { userTokenSelector } from "../../../core/atom/auth";

const useCardBookmark = (defaultIsBookmarked: boolean, onClickBookmarkBeforeLogin: () => void) => {
  const userToken = useRecoilValue(userTokenSelector);

  const [isBookmarked, setIsBookmarked] = useState(defaultIsBookmarked);

  const handleClickBookmark = (_id: string) => {
    switch (!!userToken) {
      case true:
        setIsBookmarked((prev) => !prev);
        cardCollectionApi.addNDeleteBookmark(_id);
        break;
      case false:
        onClickBookmarkBeforeLogin();
        break;
    }
  };

  return { isBookmarked, handleClickBookmark };
};

export default useCardBookmark;
