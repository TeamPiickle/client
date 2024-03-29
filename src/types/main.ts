export interface CategoryList {
  _id: string;
  title: string;
  content: string;
  unicode: string;
  gradation: string;
}

export interface BallotList {
  _id: string;
  topic: string;
  __v: number;
}

export interface MedleyCard {
  _id: string;
  coverTitle: string;
  title: string;
  sticker: string;
  description: string;
  previewCards: { _id: string; content: string }[];
}
