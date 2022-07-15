import { atom } from "recoil";

enum StateType {
  ACTIVE_STATE = "activestate",
}

export const activeState = atom({
  key: StateType.ACTIVE_STATE,
  default: false,
});
