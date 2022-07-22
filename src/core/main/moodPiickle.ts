type gridValueProps = {
  id: number;
  columnStart: number;
  columnEnd: number;
  rowStart: number;
  rowEnd: number;
};

export const gridValue: gridValueProps[] = [
  {
    id: 1,
    columnStart: 1,
    columnEnd: 2,
    rowStart: 1,
    rowEnd: 2,
  },

  {
    id: 2,
    columnStart: 1,
    columnEnd: 2,
    rowStart: 2,
    rowEnd: 3,
  },

  {
    id: 3,
    columnStart: 2,
    columnEnd: 3,
    rowStart: 1,
    rowEnd: 2,
  },

  {
    id: 4,
    columnStart: 2,
    columnEnd: 3,
    rowStart: 2,
    rowEnd: 3,
  },
];
