import React, { useEffect, useState } from "react";

import Modal from "../../common/Modal";
import IntimacySlider from "./IntimacySlider";
import { St } from "./style";

interface FilterModalProps {
  closeHandler: () => void;
}

type FilterTags = {
  type: string;
  tags: string[];
};

const filterTags: FilterTags[] = [
  {
    type: "성별",
    tags: ["남", "여"],
  },
  {
    type: "연령대",
    tags: ["10대", "20대", "30대"],
  },
  {
    type: "술자리 유형",
    tags: ["개인", "커플", "친구", "단체"],
  },
];

const intimacyTags: string[] = ["상관없음", "새로워요", "친근해요", "절친해요"];

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler } = props;
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
    const tempCheckedTags = new Set(checkedTags);
    tempCheckedTags.add(intimacyTags[intimacyValues[0]]);
    console.log("tempCheckedTags: ", tempCheckedTags);
    setCheckedTags(tempCheckedTags);
    alert([...checkedTags]);

    setTimeout(function () {
      closeHandler();
    }, 500);
  };

  useEffect(() => {
    console.log(checkedTags);
  }, [checkedTags]);

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
