import useSWR from "swr";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

export default function useUserProfile() {
  const { data, error } = useSWR(PATH.USERS, realReq.GET_SWR);

  return {
    userProfile: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

// 프로필사진 수정
//  function patchProfileImg() {
//   return realReq.PATCH(PATH.USERS);
// }

// 유저 닉네임 수정
function patchUserNickName(nickname: string) {
  return realReq.PATCH(`${PATH.USERS}/nickname`, nickname);
}

// 유저 비밀번호 재설정
function patchUserPassword(email: string, newPassword: string) {
  return realReq.PATCH(`${PATH.USERS}/me/password`, {
    email,
    newPassword,
  });
}

export const real = {
  patchUserNickName,
  patchUserPassword,
};
