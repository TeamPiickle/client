import qs from "qs";

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
  const searchParams = qs.stringify(
    {
      search: types.length === 0 ? ["태그"] : types,
    },
    { arrayFormat: "repeat" },
  );

  return realReq.GET<T>(`${PATH.CATEGORIES}/cards?${searchParams}`);
}

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.PUT(`${PATH.USERS}/bookmarks`, { cardId });
}

export const cardCollectionApi = {
  fetchCardsWithCategory,
  fetchCardsWithBest,
  fetchCardsWithFilter,
  addNDeleteBookmark,
};
