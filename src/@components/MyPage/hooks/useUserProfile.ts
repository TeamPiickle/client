import useSWR, { useSWRConfig } from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { PiickleSWRResponse } from "../../../types/remote/swr";
import { UserProfile } from "../../../types/users";

export default function useUserProfile() {
  const { data } = useSWR<PiickleSWRResponse<UserProfile>>(PATH.USERS_, realReq.GET_SWR);
  const { mutate } = useSWRConfig();

  const handleNewProfile = () => {
    mutate(PATH.USERS_);
  };

  return {
    userProfile: data?.data,
    handleNewProfile,
  };
}
