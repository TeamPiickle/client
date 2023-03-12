import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import { filterTagsState, sliderIdxState } from "../../../core/atom/slider";
import { CardList, CardsTypeLocation } from "../../../types/cardCollection";
import { intimacyTags } from "../../../util/cardCollection/filter";
import fetchCardCollection from "../../../util/fetchCardCollection";

// TODO :: SWR로 get 하기
export function useCardLists(cardsTypeLocation: CardsTypeLocation) {
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
