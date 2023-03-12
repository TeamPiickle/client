import { PatchingUserNickName, PatchingUserPassword } from "../../types/remote/request";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function patchProfileImg(file: FormData) {
  return realReq.PATCH(`${PATH.USERS_}${PATH.USERS_PROFILEIMAGE}`, file);
}

function patchUserNickName(patchingUserNickname: PatchingUserNickName) {
  return realReq.PATCH(`${PATH.USERS_}${PATH.USERS_NICKNAME}`, patchingUserNickname);
}

function patchUserPassword(PatchingUserPassword: PatchingUserPassword) {
  return realReq.PATCH(`${PATH.USERS_}/me/password`, PatchingUserPassword);
}

export const myPageApi = {
  patchProfileImg,
  patchUserNickName,
  patchUserPassword,
};
