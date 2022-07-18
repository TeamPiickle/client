import { atom } from "recoil";

enum StateType {
  SLIDER_IDX = "slideridx",
}

export const sliderIdxState = atom({
  key: StateType.SLIDER_IDX,
  default: 0,
});
