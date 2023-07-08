export const enum LocationType {
  ALL = "all",
  BEST = "best",
  BOOKMARK = "bookmark",
  CATEGORY = "category",
  FILTER = "filter",
  MEDLEY = "medley",
  RECENT = "recent",
}

interface AllTypeLocation {
  type: LocationType.ALL;
}

interface BestTypeLocation {
  type: LocationType.BEST;
}
interface BookmarkTypeLocation {
  type: LocationType.BOOKMARK;
}

interface CategoryTypeLocation {
  type: LocationType.CATEGORY;
  categoryId: string;
}

interface FilterTypeLocation {
  type: LocationType.FILTER;
  filterTypes: string;
}

interface MedleyTypeLocation {
  type: LocationType.MEDLEY;
  medleyId: string;
}

interface RecentTypeLocation {
  type: LocationType.RECENT;
}

export type CardsTypeLocation =
  | AllTypeLocation
  | BestTypeLocation
  | BookmarkTypeLocation
  | CategoryTypeLocation
  | FilterTypeLocation
  | MedleyTypeLocation
  | RecentTypeLocation;

export interface CardList {
  _id: string;
  content: string;
  tags: string[];
  isBookmark: boolean;
  filter: string[];
}

export interface RecentCardList {
  recentlyDate: string;
  cardResponseDtos: CardList[];
}
