import { atom } from "recoil";

enum StateType {
  SLIDER_IDX = "slideridx",
  FILTER_TAGS = "filtertags",
}

export const sliderIdxState = atom({
  key: StateType.SLIDER_IDX,
  default: 0,
});

export const filterTagsState = atom({
  key: StateType.FILTER_TAGS,
  default: [],
});
