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
