import useSWR from "swr";

import { PiickleSWRResponse } from "../../types/swr";
import { UserProfile } from "../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

export default function useUserProfile() {
  const { data, error } = useSWR<PiickleSWRResponse<UserProfile>>(PATH.USERS, realReq.GET_SWR);

  return {
    userProfile: data?.data,
    isLoading: !error && !data,
  };
}

// 프로필사진 수정
function patchProfileImg(file: FormData) {
  return realReq.PATCH(`${PATH.USERS}/profile-image`, file);
}

// 유저 닉네임 수정
function patchUserNickName(nickname: string) {
  return realReq.PATCH(`${PATH.USERS}/nickname`, {
    nickname: nickname,
  });
}

// 유저 비밀번호 재설정
function patchUserPassword(email: string, newPassword: string) {
  return realReq.PATCH(`${PATH.USERS}/me/password`, {
    email,
    newPassword,
  });
}

export const real = {
  patchProfileImg,
  patchUserNickName,
  patchUserPassword,
};
