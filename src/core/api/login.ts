import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postLogin(email: string, password: string) {
  return realReq.POST(`${PATH.USERS_}${PATH.USERS_LOGIN}`, {
    email,
    password,
  });
}

export const loginApi = {
  postLogin,
};
