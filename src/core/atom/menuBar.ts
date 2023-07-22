import { atom } from "recoil";

enum StateType {
  ACTIVE_STATE_MODAL = "activestatemodal",
  ACTIVE_STATE_TOAST = "activestatetoast",
}

export const activeStateModal = atom({
  key: StateType.ACTIVE_STATE_MODAL,
  default: false,
});

export const activeStateToast = atom({
  key: StateType.ACTIVE_STATE_TOAST,
  default: {
    message: "",
    duration: 0,
  },
});
