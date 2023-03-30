import { useMemo } from "react";
import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { MedleyCard } from "../../../types/main";
import { PiickleSWRResponse } from "../../../types/remote/swr";

export function useMedleyLists() {
  const { data, error } = useSWR<PiickleSWRResponse<MedleyCard[]>>(`${PATH.MEDLEY}`, realReq.GET_SWR);
  const randomMedleyLists = useMemo(() => data?.data.data.sort(() => Math.random() - 0.5), [data]);

  return {
    randomMedleyLists,
    isLoading: !error && !data,
  };
}
