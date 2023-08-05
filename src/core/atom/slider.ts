import { atom } from "recoil";

import { persistedFilterTagsStateEffect } from "./filterTagsStateHandlers";

enum StateType {
  SLIDER_IDX = "slideridx",
  IS_SLIDER_DOWN = "issliderdown",
  FILTER_TAGS = "filtertags",
}

export const sliderIdxState = atom({
  key: StateType.SLIDER_IDX,
  default: 0,
});

export const isSliderDownState = atom({
  key: StateType.IS_SLIDER_DOWN,
  default: false,
});

export const filterTagsState = atom<{ tags: Set<string>; intimacy: number[]; isActive: boolean }>({
  key: StateType.FILTER_TAGS,
  default: { tags: new Set(), intimacy: [0], isActive: false },
  effects: [persistedFilterTagsStateEffect],
});
