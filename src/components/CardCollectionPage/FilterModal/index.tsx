/*
마지막 편집자: 22-08-11 joohaem
변경사항 및 참고:
  - 로직 분리 리팩토링이 필요합니다
    
고민점:
  - 
*/

import React, { useEffect } from "react";
import { flushSync } from "react-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import { filterTagsState, sliderIdxState } from "../../../core/atom/slider";
import { filterTagsInfo, intimacyTags } from "../../../core/cardCollection/filter";
import { CardList } from "../../../types/cardCollection";
import Modal from "../../common/Modal";
import IntimacySlider from "./IntimacySlider";
import { St } from "./style";

interface FilterModalProps {
  closeHandler: () => void;
  setCardLists: React.Dispatch<React.SetStateAction<CardList[] | null>>;
}

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler, setCardLists } = props;

  const [filterTags, setFilterTags] = useRecoilState(filterTagsState);
  const setSliderIdx = useSetRecoilState(sliderIdxState);

  useEffect(() => {
    if (!filterTags.isActive) setFilterTags({ tags: new Set(), intimacy: [0], isActive: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTags.isActive]);

  // 태그를 눌렀을 때 함수
  const toggleTag = (_tag: string) => {
    if (_tag === "19금") return;

    setFilterTags((prevFilterTags) => {
      const tempCheckedTags = new Set(filterTags.tags);
      tempCheckedTags.has(_tag) ? tempCheckedTags.delete(_tag) : tempCheckedTags.add(_tag);
      return { ...prevFilterTags, tags: tempCheckedTags };
    });
  };

  // 추천 시작하기를 눌렀을 때, 태그 정보들과 친밀도 정보를 담아주고 창닫기
  const submitFilter = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // 로딩 중 표시
    flushSync(() => {
      setCardLists(null);
    });
    closeHandler();

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
    if (_fetchingCheckedTags.has("절친해요")) {
      _fetchingCheckedTags.delete("절친해요");
      _fetchingCheckedTags.add("깊어요");
    }

    // 데이터 패칭
    const { data } = await cardCollectionApi.fetchCardsWithFilter<{ data: CardList[] }>([..._fetchingCheckedTags]);
    flushSync(() => {
      setFilterTags((prevFilterTags) => {
        return { ...prevFilterTags, isActive: true };
      });
      setCardLists(data);
      setSliderIdx(0);
    });
  };

  return (
    <Modal closeHandler={closeHandler}>
      <St.ModalContentsWrapper>
        {filterTagsInfo.map((filterTagInfo, idx) => (
          <React.Fragment key={`filter-${idx}`}>
            <St.FilterTitle>{filterTagInfo.type}</St.FilterTitle>
            <St.FilterTagsWrapper>
              {filterTagInfo.tags.map((tag, index) => (
                <St.FilterTag key={index} isactive={filterTags.tags.has(tag)} onClick={() => toggleTag(tag)}>
                  {tag}
                </St.FilterTag>
              ))}
            </St.FilterTagsWrapper>
          </React.Fragment>
        ))}

        <St.FilterIntimacyWrapper>
          <St.FilterTitle>친밀도</St.FilterTitle>
          <IntimacySlider
            price={filterTags.intimacy}
            onChange={(values: number[]) => {
              setFilterTags((prevFilterTags) => {
                return { ...prevFilterTags, intimacy: values };
              });
            }}
          />
          <St.FilterIntimacyTagsWrapper>
            {intimacyTags.map((tag, index) => (
              <St.FilterIntimacyTag isactive={index === filterTags.intimacy[0]} key={index}>
                {tag}
              </St.FilterIntimacyTag>
            ))}
          </St.FilterIntimacyTagsWrapper>
        </St.FilterIntimacyWrapper>
      </St.ModalContentsWrapper>

      <St.SubmitBtnWrapper>
        <St.SubmitBtn onClick={submitFilter} type="submit">
          추천 시작하기
        </St.SubmitBtn>
      </St.SubmitBtnWrapper>
    </Modal>
  );
}
