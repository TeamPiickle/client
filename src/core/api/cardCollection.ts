import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithCategory(categoryId: string) {
  return realReq.GET(`${PATH.CATEGORIES}/${categoryId}`);
}

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithBest() {
  return realReq.GET(`${PATH.CARDS}/best`);
}

// 필터로 카드 리스트 조회
function fetchCardsWithFilter(types: string[]) {
  let params = "";
  types.forEach((type) => {
    params += `?search=${type}`;
  });

  return realReq.GET(`${PATH.CATEGORIES}/cards${params}`);
}

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.POST(`${PATH.USERS}/bookmarks`, { cardId });
}

export const real = {
  fetchCardsWithCategory,
  fetchCardsWithBest,
  fetchCardsWithFilter,
  addNDeleteBookmark,
};
