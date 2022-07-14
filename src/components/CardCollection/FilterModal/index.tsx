import React, { useState } from "react";

import Modal from "../../common/Modal";
import { St } from "./style";

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

export default function FilterModal() {
  // 체크한 태그들을 저장할 state
  const [checkedTags, setCheckedTags] = useState<Set<string>>(new Set());
  // 태그를 눌렀을 때 함수
  const toggleTagButton = (_id: string) => {
    const tempCheckedTags = new Set([...checkedTags]);
    tempCheckedTags.has(_id) ? tempCheckedTags.delete(_id) : tempCheckedTags.add(_id);
    setCheckedTags(tempCheckedTags);
  };

  return (
    <Modal>
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

      <St.FilterTitle>친밀도</St.FilterTitle>
      <St.FilterIntimacyRange type="range" min="0" max="120" value="40" />
      {intimacyTags.map((tag) => (
        <St.FilterIntimacyTag key={tag.id}>{tag.name}</St.FilterIntimacyTag>
      ))}

      <St.SubmitBtn onClick={() => window.alert([...checkedTags])} type="submit">
        추천 시작하기
      </St.SubmitBtn>
    </Modal>
  );
}
