import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 전체 카테고리 조화
async function fetchCategoryLists() {
  const data = await realReq.GET(PATH.CATEGORIES);

  return data.data;
}

// 베스트 5 피클 조회
async function fetchBestPiickle() {
  const data = await realReq.GET(`${PATH.CARDS}/best-5`);

  return data.data;
}

export const real = {
  fetchCategoryLists,
  fetchBestPiickle,
};
