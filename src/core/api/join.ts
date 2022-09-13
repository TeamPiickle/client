import { userEmail, userInfo } from "./../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postEmail(postingEmail: string) {
  return realReq.POST(`${PATH.USERS_}${PATH.USERS_EMAIL}`, postingEmail);
}

function postUserInfo(postingUserInfo: userInfo) {
  return realReq.POST(PATH.USERS_, postingUserInfo);
}

export const joinApi = {
  postEmail,
  postUserInfo,
};
