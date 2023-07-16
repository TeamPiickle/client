import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postLogin(email: string, password: string) {
  return realReq.POST(`${PATH.USERS_}${PATH.USERS_LOGIN}`, {
    email,
    password,
  });
}

function postSocialLogin(vendor: string, accessToken: string, code: string, state: string) {
  return realReq.POST(`${PATH.USERS_}${PATH.USERS_SOCIAL}`, {
    vendor,
    accessToken,
    code,
    state,
  });
}

export const loginApi = {
  postLogin,
  postSocialLogin,
};
