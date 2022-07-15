import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 전체 카테고리 조화
function fetchCategoryLists() {
  return realReq.GET(PATH.CATEGORIES);
}

// 베스트 5 피클 조회
function fetchBestPiickle() {
  return realReq.GET(`${PATH.CARDS}/best-5`);
}

export const real = {
  fetchCategoryLists,
  fetchBestPiickle,
};
