type FilterTags = {
  type: string;
  tags: string[];
};

export const filterTagsInfo: FilterTags[] = [
  {
    type: "성별",
    tags: ["남", "여"],
  },
  {
    type: "연령대",
    tags: ["10대", "20대", "30대"],
  },
  {
    type: "대화 유형",
    tags: ["개인", "커플", "친구", "단체", "19금"],
  },
];

export const intimacyTags: string[] = ["상관없음", "새로워요", "친근해요", "절친해요"];
