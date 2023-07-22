import { atom } from "recoil";

enum StateType {
  ACTIVE_STATE_MODAL = "activestatemodal",
  ACTIVE_STATE_TOAST = "activestatetoast",
}

type ToastType = {
  message: string;
  duration: number;
};

export const activeStateModal = atom({
  key: StateType.ACTIVE_STATE_MODAL,
  default: false,
});

export const activeStateToast = atom<ToastType>({
  key: StateType.ACTIVE_STATE_TOAST,
  default: {
    message: "",
    duration: 0,
  },
});
