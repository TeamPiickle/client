import { useState } from "react";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import useAuth from "../../../core/hooks/useAuth";

const useCardBookmark = (defaultIsBookmarked: boolean, onClickBookmarkBeforeLogin: () => void) => {
  const { isLogin } = useAuth();

  const [isBookmarked, setIsBookmarked] = useState(defaultIsBookmarked);

  const handleClickBookmark = (_id: string) => {
    switch (isLogin) {
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
