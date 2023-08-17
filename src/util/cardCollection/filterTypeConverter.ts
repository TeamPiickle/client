type FilterTagsStateType = {
  tags: Set<string>;
  intimacy: number[];
  isActive: boolean;
};

export const convertSetToArr = (value: FilterTagsStateType) => {
  return {
    ...value,
    tags: Array.from(value.tags),
  };
};

export const convertArrToSet = (value: FilterTagsStateType) => {
  return {
    ...value,
    tags: new Set(value.tags),
  };
};
