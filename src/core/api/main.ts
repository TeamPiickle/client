import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 전체 카테고리 조화
function fetchCategoryLists() {
  return realReq.GET(PATH.CATEGORIES);
}

export const real = {
  fetchCategoryLists,
};
