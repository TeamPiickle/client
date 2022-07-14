export type VoteTitle = {
  id: number;
  title: string;
};

export const voteTitle: VoteTitle[] = [
  {
    id: 0,
    title: "인간관계에서 가장 중요하게 생각하는 것은?",
  },
  {
    id: 1,
    title: "투표 주제 제목",
  },
  {
    id: 2,
    title: "투표 주제 제목",
  },
  {
    id: 3,
    title: "투표 주제 제목",
  },
];

export type VoteContent = {
  id: number;
  name: string;
};

export const voteContent: VoteContent[] = [
  {
    id: 0,
    name: "민초",
  },
  {
    id: 1,
    name: "반민초",
  },
  {
    id: 2,
    name: "중립",
  },
];
