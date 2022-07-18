import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { real } from "../../../core/api/cardCollection";
import { filterTags, intimacyTags } from "../../../core/cardCollection/filter";
import Modal from "../../common/Modal";
import IntimacySlider from "./IntimacySlider";
import { St } from "./style";

interface FilterModalProps {
  closeHandler: () => void;
}

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler } = props;

  const navigation = useNavigate();
  const [checkedTags, setCheckedTags] = useState<Set<string>>(new Set()); // 체크한 태그들을 저장할 state
  const [intimacyValues, setIntimacyValues] = useState<number[]>([0]); // 친밀도 value

  // 태그를 눌렀을 때 함수
  const toggleTag = (_tag: string) => {
    const tempCheckedTags = new Set([...checkedTags]);
    tempCheckedTags.has(_tag) ? tempCheckedTags.delete(_tag) : tempCheckedTags.add(_tag);
    setCheckedTags(tempCheckedTags);
  };

  // 추천 시작하기를 눌렀을 때, 태그 정보들과 친밀도 정보를 담아주고 창닫기
  const submitFilter = () => {
    const _checkedTagsArr = [...checkedTags];
    _checkedTagsArr.push(intimacyTags[intimacyValues[0]]);
    console.log(_checkedTagsArr);

    real.fetchCardsWithFilter(_checkedTagsArr);
    navigation("/card-collection", { state: { type: "filter", filters: ["남자", "상관없음"] } });

    closeHandler();
  };

  return (
    <Modal closeHandler={closeHandler}>
      <St.ModalContentsWrapper>
        {filterTags.map((filterTag, idx) => (
          <React.Fragment key={`filter-${idx}`}>
            <St.FilterTitle>{filterTag.type}</St.FilterTitle>
            <St.FilterTagsWrapper>
              {filterTag.tags.map((tag, index) => (
                <St.FilterTag key={index} isactive={checkedTags.has(tag)} onClick={() => toggleTag(tag)}>
                  {tag}
                </St.FilterTag>
              ))}
            </St.FilterTagsWrapper>
          </React.Fragment>
        ))}

        <St.FilterIntimacyWrapper>
          <St.FilterTitle>친밀도</St.FilterTitle>
          <IntimacySlider
            min={0}
            max={3}
            step={1}
            price={intimacyValues}
            onChange={(values: number[]) => {
              setIntimacyValues(values);
            }}
          />
          <St.FilterIntimacyTagsWrapper>
            {intimacyTags.map((tag, index) => (
              <St.FilterIntimacyTag isactive={index === intimacyValues[0]} key={index}>
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
