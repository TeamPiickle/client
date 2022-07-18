import { atom } from "recoil";

enum StateType {
  SLIDER_IDX = "slideridx",
}

export const activeState = atom({
  key: StateType.SLIDER_IDX,
  default: 0,
});
