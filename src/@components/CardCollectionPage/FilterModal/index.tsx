import React from "react";

import { filterTagsInfo, intimacyTags } from "../../../core/cardCollection/filter";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import Modal from "../../@common/Modal";
import useFilterTags from "./@hooks/useFilterTags";
import IntimacySlider from "./IntimacySlider";
import St from "./style";

interface FilterModalProps {
  closeHandler: () => void;
  fetchCardListsWithFilter: () => void;
}

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler, fetchCardListsWithFilter } = props;

  const { filterTags, toggleTag } = useFilterTags();

  // 추천 시작하기를 눌렀을 때, 태그 정보들과 친밀도 정보를 담아주고 창닫기
  const submitFilter = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fetchCardListsWithFilter();
    closeHandler();
  };

  return (
    <Modal theme="WHITE" closeHandler={closeHandler} closeBtnClassName={GTM_CLASS_NAME.filterClose}>
      <St.ModalContentsWrapper>
        {filterTagsInfo.map((filterTagInfo, idx) => (
          <React.Fragment key={`filter-${idx}`}>
            <St.Title>{filterTagInfo.type}</St.Title>
            {filterTagInfo.description && <St.Description>{filterTagInfo.description}</St.Description>}
            <St.FilterTagsWrapper>
              {filterTagInfo.tags.map((tag, index) => (
                <St.FilterTag
                  key={index}
                  className={GTM_CLASS_NAME[`filter${tag}`]}
                  isactive={filterTags.tags.has(tag)}
                  onClick={() => toggleTag(tag)}>
                  {tag}
                </St.FilterTag>
              ))}
            </St.FilterTagsWrapper>
          </React.Fragment>
        ))}

        <St.FilterIntimacyWrapper>
          <St.Title>친밀도</St.Title>
          <IntimacySlider price={filterTags.intimacy} />
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
        <St.SubmitBtn type="submit" className={GTM_CLASS_NAME.filterStart} onClick={submitFilter}>
          카드 추천 받기
        </St.SubmitBtn>
      </St.SubmitBtnWrapper>
    </Modal>
  );
}
