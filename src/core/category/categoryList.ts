import { HeadingTitle } from "../main/headingTitles";

type categoryListProps = {
  id: number;
  title: string;
  content: string;
};

export const categoryList: categoryListProps[] = [
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
  },
];

export const categoryTitles: HeadingTitle = {
  title: "Mood Piickle",
  content: "더욱 쉽게 피클을 즐길 수 있는 방법!\n지금 나의 무드에 맞는 카테고리를 골라보세요",
  isMoreBtn: false,
};

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
    rowEnd: 6,
  },

  {
    id: 2,
    columnStart: 1,
    columnEnd: 2,
    rowStart: 6,
    rowEnd: 9,
  },

  {
    id: 3,
    columnStart: 1,
    columnEnd: 2,
    rowStart: 9,
    rowEnd: 12,
  },

  {
    id: 4,
    columnStart: 1,
    columnEnd: 2,
    rowStart: 12,
    rowEnd: 15,
  },

  {
    id: 5,
    columnStart: 2,
    columnEnd: 3,
    rowStart: 1,
    rowEnd: 4,
  },

  {
    id: 6,
    columnStart: 2,
    columnEnd: 3,
    rowStart: 4,
    rowEnd: 7,
  },

  {
    id: 7,
    columnStart: 2,
    columnEnd: 3,
    rowStart: 7,
    rowEnd: 12,
  },

  {
    id: 8,
    columnStart: 2,
    columnEnd: 3,
    rowStart: 12,
    rowEnd: 15,
  },
];
