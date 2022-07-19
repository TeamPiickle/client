import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithCategory<T>(categoryId: string) {
  return realReq.GET<T>(`${PATH.CATEGORIES}/${categoryId}`);
}

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithBest<T>() {
  return realReq.GET<T>(`${PATH.CARDS}/best`);
}

// 필터로 카드 리스트 조회
function fetchCardsWithFilter<T>(types: string[]) {
  let params = "";

  if (types.length === 0) {
    params = "?serach=타입";
  } else {
    types.forEach((type) => {
      params += `?search=${type}`;
    });
  }

  return realReq.GET<T>(`${PATH.CATEGORIES}/cards${params}`);
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
