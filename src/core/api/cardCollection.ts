import qs from "qs";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithCategory<T>(categoryId: string) {
  return realReq.GET<T>(`${PATH.CATEGORIES_}/${categoryId}`);
}

// 베스트피클에 있는 카드 리스트 조회
function fetchCardsWithBest<T>() {
  return realReq.GET<T>(`${PATH.CARDS_}${PATH.CARDS_BEST}`);
}

// 메들리에 있는 카드 리스트 조회
function fetchCardsWithMedley<T>(medleyId: string) {
  return realReq.GET<T>(`${PATH.MEDLEY}/${medleyId}`);
}

// 필터로 카드 리스트 조회
function fetchCardsWithFilter<T>(types: string[]) {
  const searchParams = qs.stringify(
    {
      search: types.length === 0 ? ["태그"] : types,
    },
    { arrayFormat: "repeat" },
  );

  return realReq.GET<T>(`${PATH.CATEGORIES_}${PATH.CATEGORIES_CARDS}?${searchParams}`);
}

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.PUT(`${PATH.USERS_}${PATH.USERS_BOOKMARK}`, { cardId });
}

export const cardCollectionApi = {
  fetchCardsWithCategory,
  fetchCardsWithBest,
  fetchCardsWithMedley,
  fetchCardsWithFilter,
  addNDeleteBookmark,
};
