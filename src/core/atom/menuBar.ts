import { atom } from "recoil";

enum StateType {
  ACTIVE_STATE = "activestate",
  ACTIVE_STATE_MODAL = "activestatemodal",
}

export const activeState = atom({
  key: StateType.ACTIVE_STATE,
  default: false,
});

export const activeStateModal = atom({
  key: StateType.ACTIVE_STATE_MODAL,
  default: false,
});
