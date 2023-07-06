export type HeadingTitle = {
  title: string;
  content: string;
  isMoreBtn: boolean;
};

export const headingTitles: HeadingTitle[] = [
  {
    title: "이번 달 Best Piickle",
    content: "가장 많이 북마크한 대화 주제를 확인해 보세요",
    isMoreBtn: true,
  },
  {
    title: "Mood Piickle",
    content: "지금 나의 무드에 맞는 카테고리를 골라 대화해 보세요",
    isMoreBtn: true,
  },
  {
    title: "Piickle Me!",
    content: "호불호 갈리는 주제에 대한\n사람들의 의견을 투표 결과로 알아보세요",
    isMoreBtn: false,
  },
];
