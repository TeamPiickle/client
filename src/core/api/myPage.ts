import useSWR, { useSWRConfig } from "swr";

import { PatchingUserNickName, PatchingUserPassword } from "../../types/remote/request";
import { PiickleSWRResponse } from "../../types/remote/swr";
import { UserProfile } from "../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

export default function useUserProfile() {
  const { data, error } = useSWR<PiickleSWRResponse<UserProfile>>(PATH.USERS, realReq.GET_SWR);
  const { mutate } = useSWRConfig();

  const handleNewProfile = () => {
    mutate(PATH.USERS);
  };

  return {
    userProfile: data?.data,
    isLoading: !error && !data,
    handleNewProfile,
  };
}

// 프로필사진 수정
function patchProfileImg(file: FormData) {
  return realReq.PATCH(`${PATH.USERS}/profile-image`, file);
}

// 유저 닉네임 수정
function patchUserNickName(patchingUserNickname: PatchingUserNickName) {
  return realReq.PATCH(`${PATH.USERS}/nickname`, patchingUserNickname);
}

// 유저 비밀번호 재설정
function patchUserPassword(PatchingUserPassword: PatchingUserPassword) {
  return realReq.PATCH(`${PATH.USERS}/me/password`, PatchingUserPassword);
}

export const myPageApi = {
  patchProfileImg,
  patchUserNickName,
  patchUserPassword,
};
