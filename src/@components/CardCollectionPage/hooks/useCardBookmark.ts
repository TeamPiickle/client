import { useState } from "react";

import { cardCollectionApi } from "../../../core/api/cardCollection";

const useCardBookmark = (defaultIsBookmarked: boolean, onClickBookmarkBeforeLogin: () => void) => {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const [isBookmarked, setIsBookmarked] = useState(defaultIsBookmarked);

  const handleClickBookmark = (_id: string) => {
    switch (LOGIN_STATE) {
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
