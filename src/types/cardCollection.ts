export type CardsTypeLocation =
  | {
      type: "category";
      categoryId: string;
    }
  | {
      type: "best";
      index: number;
    }
  | {
      type: "all";
    }
  | {
      type: "filter";
      filters: string[];
    };

export interface CardIdList {
  _id: string;
  content: string;
  tags: string[];
  category: string[];
  filter: string[];
}
