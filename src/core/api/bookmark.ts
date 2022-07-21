import useSWR from "swr";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

export default function useUserBookmarks() {
  const { data, error } = useSWR(`${PATH.USERS}/bookmarks`, realReq.GET_SWR);

  return {
    userBookmarks: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

// 마이피클 카드 리스트 조회
function fetchCardsWithBookmarks<T>() {
  return realReq.GET<T>(`${PATH.USERS}/bookmarks`);
}

export const bookmarkApi = {
  fetchCardsWithBookmarks,
};
