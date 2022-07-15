export interface CategoryList {
  _id: string;
  title: string;
  content: string;
}

export interface Card {
  _id: string;
  category: string;
  content: string;
}
