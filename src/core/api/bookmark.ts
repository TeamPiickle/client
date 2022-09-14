import useSWR from "swr";

import { PiickleSWRResponse } from "../../types/remote/swr";
import { myPiickle } from "../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

export default function useUserBookmarks() {
  const { data, error } = useSWR<PiickleSWRResponse<myPiickle[]>>(`${PATH.USERS_}/bookmarks`, realReq.GET_SWR);

  return {
    userBookmarks: data?.data,
    isLoading: !error && !data,
  };
}

// 마이피클 카드 리스트 조회
function fetchCardsWithBookmarks<T>() {
  return realReq.GET<T>(`${PATH.USERS_}/bookmarks`);
}

export const bookmarkApi = {
  fetchCardsWithBookmarks,
};
