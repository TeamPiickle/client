import useSWR from "swr";

import { myPiickle } from "../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

export default function useUserBookmarks() {
  const { data, error } = useSWR<{ data: { data: myPiickle[] } }>(`${PATH.USERS}/bookmarks`, realReq.GET_SWR);

  return {
    userBookmarks: data?.data,
    isLoading: !error && !data,
  };
}

// 마이피클 카드 리스트 조회
function fetchCardsWithBookmarks<T>() {
  return realReq.GET<T>(`${PATH.USERS}/bookmarks`);
}

export const bookmarkApi = {
  fetchCardsWithBookmarks,
};
