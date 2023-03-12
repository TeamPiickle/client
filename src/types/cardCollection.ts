export const enum LocationType {
  CATEGORY = "category",
  BEST = "best",
  ALL = "all",
  BOOKMARK = "bookmark",
  MEDLEY = "medley",
  FILTER = "filter",
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

interface FilterTypeLocation {
  type: LocationType.FILTER;
  filterTypes: string;
}

export type CardsTypeLocation =
  | CategoryTypeLocation
  | BestTypeLocation
  | AllTypeLocation
  | BookmarkTypeLocation
  | MedleyTypeLocation
  | FilterTypeLocation;

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}
