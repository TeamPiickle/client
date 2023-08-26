import { atom } from "recoil";

import { axiosInstance } from "../api/common/axios";
import { USER_TOKEN } from "../api/common/constants";

enum StateType {
  USER_TOKEN_ATOM = "usertokenatom",
}

export const userTokenAtom = atom<string | null>({
  key: StateType.USER_TOKEN_ATOM,
  default: localStorage.getItem(USER_TOKEN) || null,
  effects: [
    () => {
      const initialToken = localStorage.getItem(USER_TOKEN);
      if (initialToken) axiosInstance.defaults.headers.common["x-auth-token"] = `Bearer ${initialToken}`;
    },
    ({ onSet }) => {
      onSet((newToken, _, isReset) => {
        if (isReset || newToken === null) {
          localStorage.removeItem(USER_TOKEN);
          axiosInstance.defaults.headers.common["x-auth-token"] = false;
          return;
        }

        localStorage.setItem(USER_TOKEN, newToken);
        axiosInstance.defaults.headers.common["x-auth-token"] = `Bearer ${newToken}`;
      });
    },
  ],
});
