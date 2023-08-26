import { categoryTitles } from "../../util/category/categoryList";
import Header from "../@common/Header";
import HeadingTitleContainer from "../@common/HeadingTitleContainer";
import useGTMPage from "../@common/hooks/useGTMPage";
import useScroll from "../@common/hooks/useScrollToTop";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import CategoryBanner from "./CategoryBanner";
import CategoryContents from "./CategoryContents";
import St from "./style";

export default function CategoryPage() {
  useGTMPage();
  useScroll();
  return (
    <St.Root>
      <Header />
      <SuspenseBoundary>
        <CategoryBanner />
        <HeadingTitleContainer headingTitles={categoryTitles} />
        <CategoryContents />
      </SuspenseBoundary>
    </St.Root>
  );
}
