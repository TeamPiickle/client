import qs from "qs";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { CardList, CardsTypeLocation } from "../../types/cardCollection";
import fetchCardCollection from "../../util/fetchCardCollection";
import { filterTagsState, sliderIdxState } from "../atom/slider";
import { intimacyTags } from "../cardCollection/filter";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// TODO :: SWR로 get 하기
export default function useCardLists(cardsTypeLocation: CardsTypeLocation) {
  const [cardLists, setCardLists] = useState<CardList[] | null>(null);

  const [filterTags, setFilterTags] = useRecoilState(filterTagsState);
  const setSliderIdx = useSetRecoilState(sliderIdxState);

  useEffect(() => {
    fetchCardCollection(cardsTypeLocation, (data: CardList[]) => {
      setCardLists(data);
    });
    // 필터 정보 초기화
    setFilterTags((prev) => ({ ...prev, isActive: false }));
  }, [cardsTypeLocation, setFilterTags]);

  const fetchCardListsWithFilter = async () => {
    // 로딩 중 표시
    flushSync(() => {
      setCardLists(null);
    });

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

    const { data } = await cardCollectionApi.fetchCardsWithFilter<{ data: CardList[] }>([..._fetchingCheckedTags]);

    flushSync(() => {
      setFilterTags((prevFilterTags) => {
        return { ...prevFilterTags, isActive: true };
      });
      setCardLists(data);
      setSliderIdx(0);
    });
  };

  return { cardLists, fetchCardListsWithFilter };
}

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithCategory<T>(categoryId: string) {
  return realReq.GET<T>(`${PATH.CATEGORIES_}/${categoryId}`);
}

// 카테고리에 있는 카드 리스트 조회
function fetchCardsWithBest<T>() {
  return realReq.GET<T>(`${PATH.CARDS_}${PATH.CARDS_BEST}`);
}

// 필터로 카드 리스트 조회
function fetchCardsWithFilter<T>(types: string[]) {
  const searchParams = qs.stringify(
    {
      search: types.length === 0 ? ["태그"] : types,
    },
    { arrayFormat: "repeat" },
  );

  return realReq.GET<T>(`${PATH.CATEGORIES_}${PATH.CATEGORIES_CARDS}?${searchParams}`);
}

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.PUT(`${PATH.USERS_}${PATH.USERS_BOOKMARK}`, { cardId });
}

export const cardCollectionApi = {
  fetchCardsWithCategory,
  fetchCardsWithBest,
  fetchCardsWithFilter,
  addNDeleteBookmark,
};
