import qs from "qs";

import { UserInfo } from "./../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postJoin(userInfoFormData: FormData) {
  return realReq.POST(PATH.USERS_, userInfoFormData);
}

function fetchNickNameValid<T>(nickname: string) {
  const nicknameParams = qs.stringify({
    nickname: nickname,
  });
  return realReq.GET<T>(`${PATH.USERS_}/nickname/is-exist?${nicknameParams}`);
}

// async function postEmail(email: string) {
//   const postingEmail = {
//     email,
//   };
//   return await realReq.POST(`${PATH.USERS_}${PATH.USERS_EMAIL}`, postingEmail);
// }

function fetchEmailValid<T>(email: string) {
  const emailParams = qs.stringify({
    email: email,
  });

  return realReq.GET<T>(`${PATH.USERS_}/existing?${emailParams}`);
}

function postUserInfo(postingUserInfo: UserInfo) {
  return realReq.POST(PATH.USERS_, postingUserInfo);
}

export const joinApi = {
  // postEmail,
  postUserInfo,
  postJoin,
  fetchNickNameValid,
  fetchEmailValid,
};
