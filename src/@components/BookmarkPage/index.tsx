import { HeadingTitle } from "../../util/main/headingTitles";
import Footer from "../@common/Footer";
import Header from "../@common/Header";
import HeadingTitleContainer from "../@common/HeadingTitleContainer";
import useGTMPage from "../@common/hooks/useGTMPage";
import { useUserBookmarks } from "./hooks/useUserBookmarks";
import MyPiickleItem from "./MyPiickleItem";
import { St } from "./style";

const bookmarkHeadingTitles: HeadingTitle = {
  title: "MY Piickle",
  content: "내가 픽한 대화 주제들을 확인해보세요",
  isMoreBtn: false,
};

export default function BookmarkPage() {
  useGTMPage();

  const { userBookmarks } = useUserBookmarks();

  return (
    <main>
      <Header />
      <HeadingTitleContainer headingTitles={bookmarkHeadingTitles} />
      <St.List>
        {userBookmarks &&
          userBookmarks.data.map((myPiickle, idx: number) => (
            <MyPiickleItem key={myPiickle.cardId} cardId={myPiickle.cardId} content={myPiickle.content} idx={idx} />
          ))}
      </St.List>
      <Footer />
    </main>
  );
}
