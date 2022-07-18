import { useEffect, useState } from "react";

import { headingTitles } from "../../../core/main/headingTitles";
import { CategoryList } from "../../../types/main";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export default function MoodPiickle() {
  const [categoryLists, setCategoryLists] = useState<CategoryList[]>([]);

  type Category = {
    _id: string;
    title: string;
    imgurl: string;
  };

  const category: Category[] = [
    {
      _id: "62cbb7d8a8c54f168a6ddfe1",
      title: "커플",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbcd43a8c54f168a6de005",
      title: "IF",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbc9caa8c54f168a6de001",
      title: "친구",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbcd4ea8c54f168a6de007",
      title: "아이스브레이킹",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbcd2ea8c54f168a6de002",
      title: "SOPT",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbcd35a8c54f168a6de003",
      title: "소개팅",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbcd3fa8c54f168a6de004",
      title: "밸런스게임",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
    {
      _id: "62cbcd4aa8c54f168a6de006",
      title: "진지한 대화",
      imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
    },
  ];

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        {category.slice(0, 4).map((info) => (
          <St.CategoryOneLine key={info._id}>
            <St.Category>{info.title}</St.Category>
          </St.CategoryOneLine>
        ))}
      </St.CategoryWrapper>
    </St.Container>
  );
}
