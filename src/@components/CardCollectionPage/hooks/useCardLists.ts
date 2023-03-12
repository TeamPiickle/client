import qs from "qs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import useSWR from "swr";

import { realReq } from "../../../core/api/common/axios";
import { PATH } from "../../../core/api/common/constants";
import { filterTagsState, sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { CardList, CardsTypeLocation, LocationType } from "../../../types/cardCollection";
import { PiickleSWRResponse } from "../../../types/remote/swr";
import { intimacyTags } from "../../../util/cardCollection/filter";

interface ExtendedCardList extends Array<CardList> {
  cardList?: CardList[]; // with category id
  cards?: CardList[]; // with medly id
}

export function useCardLists(cardsTypeLocation: CardsTypeLocation) {
  const navigate = useNavigate();

  const [filterTags, setFilterTags] = useRecoilState(filterTagsState);
  const setSliderIdx = useSetRecoilState(sliderIdxState);

  const fetchingKey = getFetchingKeyByLocation(cardsTypeLocation);
  const { data } = useSWR<PiickleSWRResponse<ExtendedCardList>>(fetchingKey, realReq.GET_SWR);

  // TODO :: return 시에 함수로 분리
  let _cardLists;
  switch (cardsTypeLocation.type) {
    case LocationType.CATEGORY:
      _cardLists = data?.data.data.cardList;
      break;
    case LocationType.MEDLEY:
      _cardLists = data?.data.data.cards;
      break;
    default:
      _cardLists = data?.data.data;
      break;
  }

  useEffect(() => {
    setFilterTags((prev) => ({ ...prev, isActive: false }));
  }, [cardsTypeLocation, setFilterTags]);

  const fetchCardListsWithFilter = async () => {
    // 남 -> 남자, 여 -> 여자
    const _fetchingCheckedTags = new Set([...filterTags.tags, intimacyTags[filterTags.intimacy[0]]]);
    if (_fetchingCheckedTags.has("남")) {
      _fetchingCheckedTags.delete("남");
      _fetchingCheckedTags.add("남자");
    }
    if (_fetchingCheckedTags.has("여")) {
      _fetchingCheckedTags.delete("여");
      _fetchingCheckedTags.add("여자");
    }

    setFilterTags((prevFilterTags) => {
      return { ...prevFilterTags, isActive: true };
    });
    setSliderIdx(0);

    navigate(routePaths.CardCollection, {
      state: { type: LocationType.FILTER, filterTypes: [..._fetchingCheckedTags] },
    });
  };

  return { cardLists: _cardLists ?? [], fetchCardListsWithFilter };
}

function getFetchingKeyByLocation(cardsTypeLocation: CardsTypeLocation) {
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
  }
}
