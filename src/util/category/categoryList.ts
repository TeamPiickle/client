import { HeadingTitle } from "../main/headingTitles";

type categoryListProps = {
  id: number;
  title: string;
  content: string;
  gradation: string;
};

export const categoryList: categoryListProps[] = [
  {
    id: 0,
    title: "아이스브레이킹",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(79, 72, 236, 0.102) 100%),linear-gradient(0deg, rgba(79, 72, 236, 0.37), rgba(79, 72, 236, 0.37)),linear-gradient(180deg, #00ff9c 0%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    id: 0,
    title: "커플",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(0deg, rgba(0, 224, 255, 0.2), rgba(0, 224, 255, 0.2)), linear-gradient(180deg, #FFBF18 0%, #73BE56 67.59%, #19BE7E 100%)",
  },
  {
    id: 0,
    title: "진지한대화",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(79, 72, 236, 0.102) 100%), linear-gradient(0deg, rgba(79, 72, 236, 0.37), rgba(79, 72, 236, 0.37)), linear-gradient(180deg, #00FF9C 0%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    id: 0,
    title: "친구",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(0deg, rgba(0, 224, 255, 0.2), rgba(0, 224, 255, 0.2)), linear-gradient(180deg, #4F48EC 0%, #FFBF18 100%)",
  },
  {
    id: 0,
    title: "IF",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(0deg, rgba(0, 224, 255, 0.2), rgba(0, 224, 255, 0.2)), linear-gradient(180deg, #C6C6C6 0%, #73BE56 67.59%, #19BE7E 100%)",
  },
  {
    id: 0,
    title: "밸런스게임",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(79, 72, 236, 0.102) 100%), linear-gradient(0deg, rgba(79, 72, 236, 0.37), rgba(79, 72, 236, 0.37)), linear-gradient(180deg, #00FF9C 0%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    id: 0,
    title: "소개팅",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, rgba(255, 0, 0, 0.2) 0%, rgba(79, 72, 236, 0.102) 100%, rgba(11, 0, 255, 0.102) 100%), linear-gradient(0deg, rgba(250, 255, 0, 0.37), rgba(250, 255, 0, 0.37)), linear-gradient(180deg, #00FF9C 0%, rgba(255, 255, 255, 0) 100%)",
  },
  {
    id: 0,
    title: "SOPT",
    content: "커플과의 추억을 공유하세요",
    gradation:
      "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 255, 133, 0.102) 100%), linear-gradient(0deg, rgba(157, 97, 255, 0.11), rgba(157, 97, 255, 0.11)), linear-gradient(180deg, #00FF9C 0%, rgba(255, 255, 255, 0) 100%)",
  },
];

export const categoryTitles: HeadingTitle = {
  title: "Mood Piickle",
  content: "지금 나의 무드에 맞는 카테고리를 골라 대화해 보세요",
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
