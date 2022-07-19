import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const categoriesHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.CATEGORIES}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: "62d5428d94ee67ae49b67c37",
            title: "소개팅",
            content: "소개팅의 추억을 공유하세요",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d5426e94ee67ae49b67c36",
            title: "IF",
            content: "32132231",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d5425494ee67ae49b67c35",
            title: "진지한 대화",
            content: "232323",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d5423e94ee67ae49b67c34",
            title: "아이스브레이킹",
            content: "31323",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d541f194ee67ae49b67c32",
            title: "친구",
            content: "친구와의 추억을 공유하세요",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d5429d94ee67ae49b67c38",
            title: "SOPT",
            content: "SOPT와의 추억을 공유하세요",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d540a594ee67ae49b67c2f",
            title: "밸런스게임",
            content: "dawwdaawdwda",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
          {
            _id: "62d5405e94ee67ae49b67c2d",
            title: "커플",
            content: "커플과의 추억을 공유하세요",
            imgurl: "https://piiklebucket11.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EC%8A%B9%EB%B9%88.png",
          },
        ],
      }),
    );
  }),

  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.CATEGORIES}/:categoryId`, (req, res, ctx) => {
    const { categoryId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          _id: "62d55d73eda8dbf570cbda81",
          title: "더미",
          cardList: [
            {
              _id: "62d55098df6e93500ec2b17d",
              content: "카테고리 지리ㅣ릴리안림나림ㄴ아링나링나리",
              tags: ["#연애", "#연애초", "#설렘"],
              filter: ["남자", "여자", "10대", "20대", "30대", "커플", "상관없음", "친근해요"],
              isBookmark: true,
            },
            {
              _id: "62d55098df6e93500ec2b17f",
              content: "담배피는 사람 싫어요",
              tags: ["#연애", "#연애초", "#설렘"],
              filter: ["남자", "여자", "10대", "20대", "30대", "커플", "상관없음", "친근해요"],
              isBookmark: true,
            },
            {
              _id: "62d55098df6e93500ec2b17g",
              content: "담배피는 사람 싫어요",
              tags: ["#연애", "#연애초", "#설렘"],
              filter: ["남자", "여자", "10대", "20대", "30대", "커플", "상관없음", "친근해요"],
              isBookmark: true,
            },
          ],
        },
      }),
    );
  }),
];
