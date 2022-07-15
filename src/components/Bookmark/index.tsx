import { HeadingTitle } from "../../core/main/headingTitles";

import Header from "../common/Header";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import MyPiickleItem from "./MyPiickleItem";
import { St } from "./style";

const bookmarkHeadingTitles: HeadingTitle = {
  title: "MY Piickle",
  content: "내가 픽한 대화 주제들을 확인해보세요",
  isMoreBtn: false,
};

type myPiickle = {
  cardId: string;
  content: string;
}

export default function Bookmark() {
  const myPiickleLists: myPiickle[] = [
    {
      "cardId": "6290145b6af16276098d04d9",
      "content": "안녕하세요 적당히 바람이 시원한 어쩌구 저쩌구~",
    },
    {
      "cardId": "6290145b6af16276098d04d8",
      "content": "서헤은 기여벙",
    }
  ]

  return (
    <main>
      <Header />
      <HeadingTitleContainer headingTitles={bookmarkHeadingTitles} />
      <St.List>
        {myPiickleLists.map((myPiickle)=> (
          <MyPiickleItem key={myPiickle.cardId} myPiickle={myPiickle}/>}
        ))}
      </St.List>
    </main>
  );
}
