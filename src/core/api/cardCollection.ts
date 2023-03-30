import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.PUT(`${PATH.USERS_}${PATH.USERS_BOOKMARK}`, { cardId });
}

export const cardCollectionApi = {
  addNDeleteBookmark,
};
