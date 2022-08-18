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

export default function BookmarkPage() {
  const { userBookmarks } = useUserBookmarks();

  console.log("hello");

  return (
    <main>
      <Header />
      <HeadingTitleContainer headingTitles={bookmarkHeadingTitles} />
      <St.List>
        {userBookmarks &&
          userBookmarks.data.map((myPiickle: myPiickle, idx: number) => (
            <MyPiickleItem key={myPiickle.cardId} cardId={myPiickle.cardId} content={myPiickle.content} idx={idx} />
          ))}
      </St.List>
      <Footer />
    </main>
  );
}
