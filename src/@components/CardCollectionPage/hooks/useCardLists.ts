import qs from "qs";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { CardList, CardsTypeLocation, LocationType } from "../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../types/remote/swr";
import useCardListsFilter from "./useCardListsFilter";

interface ExtendedCardList extends Array<CardList> {
  cardList?: CardList[]; // with category id
  cards?: CardList[]; // with medly id
}

export function useCardLists() {
  const location = useLocation();
  const cardsTypeLocation = getLocationInfoByQueries(location.search);

  const fetchingKeyByLocation = getSWRFetchingKeyByLocation(cardsTypeLocation);
  const optionsByLocation = getSWROptionsByLocation(cardsTypeLocation);

  const { data } = useSWR<PiickleSWRResponse<ExtendedCardList>>(
    fetchingKeyByLocation,
    realReq.GET_SWR,
    optionsByLocation,
  );

  const { fetchCardListsWithFilter } = useCardListsFilter(cardsTypeLocation.type !== LocationType.FILTER);

  return {
    cardLists: getReturnCardLists(data, cardsTypeLocation) ?? [],
    fetchCardListsWithFilter,
  };
}

function getReturnCardLists(
  data: PiickleSWRResponse<ExtendedCardList> | undefined,
  cardsTypeLocation: CardsTypeLocation,
) {
  switch (cardsTypeLocation.type) {
    case LocationType.CATEGORY:
      return data?.data.data.cardList;
    case LocationType.MEDLEY:
      return data?.data.data.cards;
    default:
      return data?.data.data;
  }
}

function getLocationInfoByQueries(queries: string): CardsTypeLocation {
  return queries
    .split("?")
    .splice(1)
    .reduce((acc: { [key: string]: string }, query) => {
      const [key, value] = query.split("=");
      acc[key] = value;

      return acc;
    }, {}) as unknown as CardsTypeLocation;
}

function getSWRFetchingKeyByLocation(cardsTypeLocation: CardsTypeLocation) {
  switch (cardsTypeLocation.type) {
    case LocationType.CATEGORY:
      return `${PATH.CATEGORIES_}/${cardsTypeLocation.categoryId}`;
    case LocationType.BEST:
      return `${PATH.CARDS_}${PATH.CARDS_BEST}`;
    case LocationType.BOOKMARK:
      return `${PATH.USERS_}${PATH.USERS_BOOKMARK}`;
    case LocationType.MEDLEY:
      return `${PATH.MEDLEY}/${cardsTypeLocation.medleyId}`;
    case LocationType.ALL: {
      const searchParams = qs.stringify(
        {
          search: ["태그"],
        },
        { arrayFormat: "repeat" },
      );
      return `${PATH.CATEGORIES_}${PATH.CATEGORIES_CARDS}?${searchParams}`;
    }
    case LocationType.FILTER: {
      const searchParams = qs.stringify(
        {
          search: cardsTypeLocation.filterTypes,
        },
        { arrayFormat: "repeat" },
      );
      return `${PATH.CATEGORIES_}${PATH.CATEGORIES_CARDS}?${searchParams}`;
    }
    default: {
      const searchParams = qs.stringify(
        {
          search: ["태그"],
        },
        { arrayFormat: "repeat" },
      );
      return `${PATH.CATEGORIES_}${PATH.CATEGORIES_CARDS}?${searchParams}`;
    }
  }
}

function getSWROptionsByLocation(cardsTypeLocation: CardsTypeLocation) {
  switch (cardsTypeLocation.type) {
    case LocationType.BEST:
    case LocationType.BOOKMARK:
    case LocationType.MEDLEY:
      return { suspense: true };
    default:
      return { suspense: true, revalidateOnMount: true, dedupingInterval: 700 };
  }
}
