import { useMemo } from "react";
import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { CategoryList } from "../../../types/main";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useCategoryLists(shoudOnSuspense = false) {
  const swrSetting = shoudOnSuspense ? { suspense: true } : { suspense: false };
  const { data } = useSWR<PiickleSWRResponse<CategoryList[]>>(PATH.CATEGORIES_, realReq.GET_SWR, swrSetting);
  const randomCategoryLists = useMemo(() => data?.data.data.sort(() => Math.random() - 0.5), [data]);

  return {
    categoryLists: data?.data,
    randomCategoryLists,
  };
}
