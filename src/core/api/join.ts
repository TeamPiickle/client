import qs from "qs";

import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

type postingUserInfo = {
  email: string;
  password: string;
  nickname: string;
  birthday: string;
  gender: string;
  imgFile: File;
};

function postJoin(postingUserInfo: postingUserInfo) {
  return realReq.POST(PATH.USERS, postingUserInfo);
}

function fetchNickNameValid<T>(nickname: string) {
  const nicknameParams = qs.stringify({
    nickname: nickname,
  });
  return realReq.GET<T>(`${PATH.USERS}/nickname/is-exist?${nicknameParams}`);
}

export const joinApi = {
  postJoin,
  fetchNickNameValid,
};
