export type HeadingTitle = {
  title: string;
  content: string;
  isMoreBtn: boolean;
};

export const headingTitles: HeadingTitle[] = [
  {
    title: "이번 달 Best Piickle",
    content: "마이피클을 가장 많이 달성한 대화 주제들을 확인해보세요",
    isMoreBtn: false,
  },
  {
    title: "Mood Piickle",
    content: "더욱 쉽게 피클을 즐길 수 있는 방법!\n지금 나의 무드에 맞는 카테고리를 골라보세요",
    isMoreBtn: true,
  },
  {
    title: "Piickle Me!",
    content: "당신의 피클에게 투표하세요",
    isMoreBtn: false,
  },
];
