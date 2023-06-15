import { atom, selector } from "recoil";

import { axiosInstance } from "../api/common/axios";
import { USER_TOKEN } from "../api/common/constants";

enum StateType {
  IS_LOGIN_ATOM = "isloginatom",
  USER_TOKEN_SELECTOR = "usertokenselector",
}

const isLoginAtom = atom({
  key: StateType.IS_LOGIN_ATOM,
  default: "",
});

export const userTokenSelector = selector({
  key: StateType.USER_TOKEN_SELECTOR,
  get: ({ get }) => get(isLoginAtom),
  set: ({ set }, newToken) => {
    if (!newToken) {
      localStorage.removeItem(USER_TOKEN);
      set(isLoginAtom, newToken);
      axiosInstance.defaults.headers.common["x-auth-token"] = false;
      return;
    }

    localStorage.setItem(USER_TOKEN, `${newToken}`);
    set(isLoginAtom, newToken);
    axiosInstance.defaults.headers.common["x-auth-token"] = `Bearer ${newToken}`;
  },
});
