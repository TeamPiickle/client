export type CardsTypeLocation =
  | {
      type: "category";
      categoryId: string;
    }
  | {
      type: "best";
    }
  | {
      type: "all";
    };

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}
