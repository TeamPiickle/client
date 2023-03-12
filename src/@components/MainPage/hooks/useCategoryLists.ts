import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { CategoryList } from "../../../types/main";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useCategoryLists() {
  const { data, error } = useSWR<PiickleSWRResponse<CategoryList[]>>(PATH.CATEGORIES_, realReq.GET_SWR);

  return {
    categoryLists: data?.data,
    randomCategoryLists: data && [...data.data.data].sort(() => Math.random() - 0.5),
    isLoading: !error && !data,
  };
}
