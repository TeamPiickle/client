export const enum LocationType {
  CATEGORY = "category",
  BEST = "best",
  ALL = "all",
  BOOKMARK = "bookmark",
  MEDLEY = "medley",
}

interface CategoryTypeLocation {
  type: LocationType.CATEGORY;
  categoryId: string;
}

interface BestTypeLocation {
  type: LocationType.BEST;
}

interface AllTypeLocation {
  type: LocationType.ALL;
}

interface BookmarkTypeLocation {
  type: LocationType.BOOKMARK;
}

interface MedleyTypeLocation {
  type: LocationType.MEDLEY;
  medleyId: string;
}

export type CardsTypeLocation =
  | CategoryTypeLocation
  | BestTypeLocation
  | AllTypeLocation
  | BookmarkTypeLocation
  | MedleyTypeLocation;

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}
