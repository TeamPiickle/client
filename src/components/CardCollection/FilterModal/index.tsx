import React, { useState } from "react";

import Modal from "../../common/Modal";
import IntimacySlider from "./IntimacySlider";
import { St } from "./style";

interface FilterModalProps {
  closeHandler: () => void;
}

type FilterTag = {
  id: string;
  name: string;
};

type FilterTags = {
  type: string;
  tags: FilterTag[];
};

const filterTags: FilterTags[] = [
  {
    type: "성별",
    tags: [
      {
        id: "1",
        name: "남",
      },
      {
        id: "2",
        name: "여",
      },
    ],
  },
  {
    type: "연령대",
    tags: [
      {
        id: "3",
        name: "10대",
      },
      {
        id: "4",
        name: "20대",
      },
      {
        id: "5",
        name: "30대",
      },
    ],
  },
  {
    type: "술자리 유형",
    tags: [
      {
        id: "6",
        name: "개인",
      },
      {
        id: "7",
        name: "커플",
      },
      {
        id: "8",
        name: "친구",
      },
      {
        id: "9",
        name: "단체",
      },
    ],
  },
];

const intimacyTags: FilterTag[] = [
  { id: "1", name: "상관없음" },
  { id: "2", name: "새로워요" },
  { id: "3", name: "친근해요" },
  { id: "4", name: "절친해요" },
];

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler } = props;
  const [checkedTags, setCheckedTags] = useState<Set<string>>(new Set()); // 체크한 태그들을 저장할 state
  const [intimacyValues, setIntimacyValues] = useState<number[]>([0]); // 친밀도 value
  // 태그를 눌렀을 때 함수
  const toggleTagButton = (_id: string) => {
    const tempCheckedTags = new Set([...checkedTags]);
    tempCheckedTags.has(_id) ? tempCheckedTags.delete(_id) : tempCheckedTags.add(_id);
    setCheckedTags(tempCheckedTags);
  };

  return (
    <Modal closeHandler={closeHandler}>
      <St.ModalContentsWrapper>
        {filterTags.map((filterTag, idx) => (
          <React.Fragment key={`filter-${idx}`}>
            <St.FilterTitle>{filterTag.type}</St.FilterTitle>
            <St.FilterTagsWrapper>
              {filterTag.tags.map((tag) => (
                <St.FilterTag key={tag.id} isactive={checkedTags.has(tag.id)} onClick={() => toggleTagButton(tag.id)}>
                  {tag.name}
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
              <St.FilterIntimacyTag isactive={index === intimacyValues[0]} key={tag.id}>
                {tag.name}
              </St.FilterIntimacyTag>
            ))}
          </St.FilterIntimacyTagsWrapper>
        </St.FilterIntimacyWrapper>
      </St.ModalContentsWrapper>

      <St.SubmitBtnWrapper>
        <St.SubmitBtn onClick={() => window.alert([...checkedTags])} type="submit">
          추천 시작하기
        </St.SubmitBtn>
      </St.SubmitBtnWrapper>
    </Modal>
  );
}
