import { HeadingTitle } from "../../core/main/headingTitles";
import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";

const bookmarkHeadingTitles: HeadingTitle = {
  title: "MY Piickle",
  content: "내가 픽한 대화 주제들을 확인해보세요",
  isMoreBtn: false,
};

export default function Bookmark() {
  return (
    <main>
      <Header />
      <HeadingTitleContainer headingTitles={bookmarkHeadingTitles} />
    </main>
  );
}
