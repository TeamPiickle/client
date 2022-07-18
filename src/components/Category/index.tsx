import styled from "styled-components";

import { CategoryBanner } from "../../asset/image";
import { HeadingTitle } from "../../core/main/headingTitles";
import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import CategoryContents from "./CategoryContents";
export default function Category() {
  const categoryTitles: HeadingTitle = {
    title: "Mood Piickle",
    content: "더욱 쉽게 피클을 즐길 수 있는 방법!\n지금 나의 무드에 맞는 카테고리를 골라보세요",
    isMoreBtn: false,
  };
  return (
    <main>
      <Header />
      <St.CategoryBanner src={CategoryBanner} />
      <HeadingTitleContainer headingTitles={categoryTitles} />
      <CategoryContents />
    </main>
  );
}

const St = {
  CategoryBanner: styled.img`
    width: 100%;
    height: 13.6rem;
  `,
};
