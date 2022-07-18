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
          _id: "62cbb7d8a8c54f168a6ddfe1",
          title: "커플",
          cardIdList: [
            {
              _id: "62cc0103a8c54f168a6de00a",
              content: "상대방에게 반한 포인트는 무엇인가요?",
              tags: ["#연애", "#연애초", "#설렘"],
              category: ["62cbb7d8a8c54f168a6ddfe1"],
              filter: ["남자", "여자", "10대", "20대", "30대", "커플", "상관없음", "친근해요"],
            },
            {
              _id: "62cc010aa8c54f168a6de00b",
              content: "상대방의 첫인상이 어떘는지 기억나시나요?",
              tags: ["#연애", "#첫만남", "#첫인상"],
              category: ["62cbb7d8a8c54f168a6ddfe1"],
              filter: [
                "남자",
                "여자",
                "10대",
                "20대",
                "30대",
                "커플",
                "친구",
                "단체",
                "상관없음",
                "새로워요",
                "친근해요",
                "깊어요",
              ],
            },
          ],
          content: "커플과의 추억을 공유하세요",
        },
      }),
    );
  }),
];
