import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function fetchCardsWithBookmarks<T>() {
  return realReq.GET<T>(`${PATH.USERS_}/bookmarks`);
}

export const bookmarkApi = {
  fetchCardsWithBookmarks,
};
