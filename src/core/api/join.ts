import qs from "qs";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

type patchingUserProfile = {
  file: FormData;
  nickname: string;
  birthday: string;
  gender: string;
};

function patchUserProfile(patchingUserProfile: patchingUserProfile) {
  return realReq.PATCH(PATH.USERS, patchingUserProfile);
}

function fetchNickNameValid<T>(nickname: string) {
  const nicknameParams = qs.stringify({
    nickname: nickname,
  });
  return realReq.GET<T>(`${PATH.USERS}/nickname/is-exist?${nicknameParams}`);
}

export const joinApi = {
  patchUserProfile,
  fetchNickNameValid,
};
