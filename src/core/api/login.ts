import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 로그인
async function postLogin(email: string, password: string) {
  return await realReq.POST(`${PATH.USERS}/login`, {
    email,
    password,
  });
}

export const real = {
  postLogin,
};
