import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithCategory(categoryId: string) {
  return realReq.GET(`${PATH.CATEGORIES}/${categoryId}`);
}
// 북마크 생성
function postBookmark(cardId: string) {
  return realReq.POST(`${PATH.USERS}/bookmarks`, cardId);
}
// 북마크 삭제
function deleteBookmark(cardId: string) {
  return realReq.DELETE(`${PATH.USERS}/bookmarks`, cardId);
}

export const real = {
  fetchCardsWithCategory,
  postBookmark,
  deleteBookmark,
};
