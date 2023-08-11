import { atom, DefaultValue } from "recoil";

import { convertArrToSet, convertSetToArr } from "../../util/cardCollection/filterTypeConverter";

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
  effects: [
    ({ setSelf, onSet }) => {
      const savedValue = sessionStorage.getItem(StateType.FILTER_TAGS);

      if (savedValue !== null) {
        setSelf(convertArrToSet(JSON.parse(savedValue)));
      }

      onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
          sessionStorage.removeItem(StateType.FILTER_TAGS);
        } else {
          sessionStorage.setItem(StateType.FILTER_TAGS, JSON.stringify(convertSetToArr(newValue)));
        }
      });
    },
  ],
});
