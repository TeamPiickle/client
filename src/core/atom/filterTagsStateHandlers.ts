import { AtomEffect, DefaultValue } from "recoil";

type FilterTagsStateType = {
  tags: Set<string>;
  intimacy: number[];
  isActive: boolean;
};

const FILTER_TAGS = "filtertags";
const convertSetToArr = (value: FilterTagsStateType) => {
  return {
    ...value,
    tags: Array.from(value.tags),
  };
};

const convertArrToSet = (value: FilterTagsStateType) => {
  return {
    ...value,
    tags: new Set(value.tags),
  };
};

export const persistedFilterTagsStateEffect: AtomEffect<FilterTagsStateType> = ({ setSelf, onSet }) => {
  const savedValue = sessionStorage.getItem(FILTER_TAGS);

  if (savedValue != null) {
    setSelf(convertArrToSet(JSON.parse(savedValue)));
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      sessionStorage.removeItem(FILTER_TAGS);
    } else {
      sessionStorage.setItem(FILTER_TAGS, JSON.stringify(convertSetToArr(newValue)));
    }
  });
};
