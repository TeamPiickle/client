import { atom } from "recoil";

enum StateType {
  ACTIVE_STATE_MODAL = "activestatemodal",
}

export const activeStateModal = atom({
  key: StateType.ACTIVE_STATE_MODAL,
  default: false,
});
