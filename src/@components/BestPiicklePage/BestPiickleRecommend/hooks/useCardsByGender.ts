import useSWR from "swr";

import { realReq } from "../../../../core/api/common/axios";
import { PATH } from "../../../../core/api/common/constants";
import { CardList } from "../../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../../types/remote/swr";

export function useCardsByGender(gender: "남" | "여") {
  const { data } = useSWR<PiickleSWRResponse<CardList[]>>(
    `${PATH.CARDS_}${PATH.CARDS_GENDER}/${gender}`,
    realReq.GET_SWR,
    {
      suspense: true,
    },
  );

  return {
    genderBookmarkedCards: data?.data.data,
  };
}
