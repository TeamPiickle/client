import { atom } from "recoil";

enum StateType {
  LOGIN_STATE = "loginstate",
}

export const loginState = atom({
  key: StateType.LOGIN_STATE,
  default: false,
});
