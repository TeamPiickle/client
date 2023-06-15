import { atom, selector } from "recoil";

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
      console.log("no newToekn", newToken);
      set(isLoginAtom, newToken);
      return;
    }

    console.log("hello");
    localStorage.setItem(USER_TOKEN, `${newToken}`);
    console.log("set newToekn", newToken);
    set(isLoginAtom, newToken);
  },
});
