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
  cardResponseDtos?: CardList[];
}

export function useCardLists() {
  const location = useLocation();
  const cardsTypeLocation = getLocationInfoByQueryString(location.search);

  const fetchingKeyByLocation = getSWRFetchingKeyByLocation(cardsTypeLocation);
  const optionsByLocation = getSWROptionsByLocation(cardsTypeLocation);

  const { data, mutate: mutateCardlists } = useSWR<PiickleSWRResponse<ExtendedCardList>>(
    fetchingKeyByLocation,
    realReq.GET_SWR,
    optionsByLocation,
  );

  const { fetchCardListsWithFilter } = useCardListsFilter(cardsTypeLocation.type !== LocationType.FILTER);

  return {
    cardLists: getReturnCardLists(data, cardsTypeLocation) ?? [],
    fetchCardListsWithFilter,
    mutateCardlists,
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
    case LocationType.EVENT:
      return data?.data.data.cards;
    case LocationType.RECENT:
    case LocationType.UPDATE:
      return data?.data.data.cardResponseDtos;
    default:
      return data?.data.data;
  }
}

type Obj = { [key: string]: string };
function getLocationInfoByQueryString(queryString: string): CardsTypeLocation {
  const exclusiveQuestionMarkQueryString = queryString.slice(1);
  const firstAndMarkIdx = exclusiveQuestionMarkQueryString.indexOf("&");

  if (firstAndMarkIdx === -1) {
    const [key, value] = exclusiveQuestionMarkQueryString.split("=");

    const locationInfo: Obj = {};
    locationInfo[key] = value;

    return locationInfo as unknown as CardsTypeLocation;
  }

  // ?A=B&C=DDD 2개까지
  return [
    exclusiveQuestionMarkQueryString.slice(0, firstAndMarkIdx),
    exclusiveQuestionMarkQueryString.slice(firstAndMarkIdx + 1),
  ].reduce((acc: Obj, query) => {
    const firstEqualMarkIdx = query.indexOf("=");
    const [key, value] = [query.slice(0, firstEqualMarkIdx), query.slice(firstEqualMarkIdx + 1)];
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
    case LocationType.FILTER: {
      return `${PATH.CATEGORIES_}${PATH.CATEGORIES_CARDS}?${cardsTypeLocation.filterTypes}`;
    }

    case LocationType.UPDATE:
      return `${PATH.CARDS_}${PATH.CARDS_UPDATE}`;
    case LocationType.RECENT:
      return `${PATH.CARDS_}${PATH.CARDS_RECENT}`;
    case LocationType.FEMALE:
      return `${PATH.CARDS_}${PATH.CARDS_GENDER}/여`;
    case LocationType.MALE:
      return `${PATH.CARDS_}${PATH.CARDS_GENDER}/남`;
    case LocationType.SHARE:
      return `${PATH.CARDS_}/${cardsTypeLocation.cardId}`;

    case LocationType.EVENT:
      return "/mind23/api/questions";

    case LocationType.ALL:
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
    case LocationType.EVENT:
      return { suspense: true };
    default:
      return { suspense: true, revalidateOnMount: true, dedupingInterval: 700 };
  }
}
