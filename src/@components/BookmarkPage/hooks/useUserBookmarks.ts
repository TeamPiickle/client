import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { PiickleSWRResponse } from "../../../types/remote/swr";
import { MyPiickle } from "../../../types/users";

export function useUserBookmarks() {
  const { data, error } = useSWR<PiickleSWRResponse<MyPiickle[]>>(`${PATH.USERS_}/bookmarks`, realReq.GET_SWR);

  return {
    userBookmarks: data?.data,
    isLoading: !error && !data,
  };
}
