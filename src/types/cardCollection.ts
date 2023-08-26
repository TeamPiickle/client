export const enum LocationType {
  ALL = "all",
  BEST = "best",
  BOOKMARK = "bookmark",
  CATEGORY = "category",
  FILTER = "filter",
  MEDLEY = "medley",
  RECENT = "recent",
  FEMALE = "female",
  MALE = "male",
  SHARE = "share",
  UPDATE = "update",
  EVENT = "event",
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

interface UpdateTypeLocation {
  type: LocationType.UPDATE;
}

interface FemaleTypeLocation {
  type: LocationType.FEMALE;
}

interface MaleTypeLocation {
  type: LocationType.MALE;
}

interface ShareTypeLocation {
  type: LocationType.SHARE;
  cardId: string;
}

interface EventTypeLocation {
  type: LocationType.EVENT;
}

export type CardsTypeLocation =
  | AllTypeLocation
  | BestTypeLocation
  | BookmarkTypeLocation
  | CategoryTypeLocation
  | FilterTypeLocation
  | MedleyTypeLocation
  | RecentTypeLocation
  | FemaleTypeLocation
  | MaleTypeLocation
  | ShareTypeLocation
  | UpdateTypeLocation
  | EventTypeLocation;

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

export interface EventCardList {
  totalCount: number;
  cards: CardList[];
}
