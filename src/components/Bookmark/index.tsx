import { useEffect, useState } from "react";

import useUserBookmarks from "../../core/api/bookmark";
import { HeadingTitle } from "../../core/main/headingTitles";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import MyPiickleItem from "./MyPiickleItem";
import { St } from "./style";

const bookmarkHeadingTitles: HeadingTitle = {
  title: "MY Piickle",
  content: "내가 픽한 대화 주제들을 확인해보세요",
  isMoreBtn: false,
};

export type myPiickle = {
  cardId: string;
  content: string;
};

export default function Bookmark() {
  const { userBookmarks, isLoading, isError } = useUserBookmarks();

  return (
    <main>
      <Header />
      <HeadingTitleContainer headingTitles={bookmarkHeadingTitles} />
      <St.List>
        {userBookmarks &&
          userBookmarks.data.map((myPiickle: myPiickle, idx: number) => (
            <MyPiickleItem key={idx} myPiickle={myPiickle} />
          ))}
      </St.List>
      <Footer />
    </main>
  );
}
