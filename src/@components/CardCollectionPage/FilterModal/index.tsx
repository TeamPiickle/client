import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { filterTagsState } from "../../../core/atom/slider";
import { filterTagsInfo, intimacyTags } from "../../../core/cardCollection/filter";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import Modal from "../../@common/Modal";
import IntimacySlider from "./IntimacySlider";
import { St } from "./style";

interface FilterModalProps {
  closeHandler: () => void;
  fetchCardListsWithFilter: () => void;
}

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler, fetchCardListsWithFilter } = props;

  const [filterTags, setFilterTags] = useRecoilState(filterTagsState);

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
    fetchCardListsWithFilter();
    closeHandler();
  };

  return (
    <Modal closeHandler={closeHandler} closeBtnClassName={GTM_CLASS_NAME.filterClose}>
      <St.ModalContentsWrapper>
        {filterTagsInfo.map((filterTagInfo, idx) => (
          <React.Fragment key={`filter-${idx}`}>
            <St.FilterTitle>{filterTagInfo.type}</St.FilterTitle>
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
        <St.SubmitBtn type="submit" className={GTM_CLASS_NAME.filterStart} onClick={submitFilter}>
          추천 시작하기
        </St.SubmitBtn>
      </St.SubmitBtnWrapper>
    </Modal>
  );
}
