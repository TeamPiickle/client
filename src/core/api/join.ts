import qs from "qs";

import { PostingUserInfo } from "../../types/join";
import { userEmail, userInfo } from "./../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postJoin(postingUserInfo: PostingUserInfo) {
  return realReq.POST(PATH.USERS_, postingUserInfo);
}

function fetchNickNameValid<T>(nickname: string) {
  const nicknameParams = qs.stringify({
    nickname: nickname,
  });
  return realReq.GET<T>(`${PATH.USERS_}/nickname/is-exist?${nicknameParams}`);
}

function postEmail(postingEmail: userEmail) {
  return realReq.POST(`${PATH.USERS_}${PATH.USERS_EMAIL}`, postingEmail);
}

function postUserInfo(postingUserInfo: userInfo) {
  return realReq.POST(PATH.USERS_, postingUserInfo);
}

export const joinApi = {
  postEmail,
  postUserInfo,
  postJoin,
  fetchNickNameValid,
};
