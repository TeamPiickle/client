import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 카테고리에 있는 카드 리스트 조회
async function fetchCardsWithCategory(categoryId: string) {
  const data = await realReq.GET(`${PATH.CATEGORIES}/${categoryId}`);

  return data.data;
}

// 필터로 카드 리스트 조회
async function fetchCardsWithFilter(types: string[]) {
  let params = "";
  types.forEach((type) => {
    params += `?search=${type}`;
  });

  const data = await realReq.GET(`${PATH.CATEGORIES}/cards${params}`);

  return data.data;
}

// 북마크 생성
async function postBookmark(cardId: string) {
  return await realReq.POST(`${PATH.USERS}/bookmarks`, cardId);
}

// 북마크 삭제
async function deleteBookmark(cardId: string) {
  return await realReq.DELETE(`${PATH.USERS}/bookmarks`, cardId);
}

export const real = {
  fetchCardsWithCategory,
  fetchCardsWithFilter,
  postBookmark,
  deleteBookmark,
};
