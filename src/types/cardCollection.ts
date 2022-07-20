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
    }
  | {
      type: "bookmark";
    };

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}
