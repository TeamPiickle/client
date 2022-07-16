import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const categoriesHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.CATEGORIES}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: "62cbb7d8a8c54f168a6ddfe1",
            title: "커플",
            content: "커플과의 추억을 공유하세요",
          },
          {
            _id: "62cbc9caa8c54f168a6de001",
            title: "친구",
            content: "친구와의 추억을 공유하세요",
          },
          {
            _id: "62cbcd2ea8c54f168a6de002",
            title: "SOPT",
            content: "SOPT의 추억을 공유하세요",
          },
          {
            _id: "62cbcd35a8c54f168a6de003",
            title: "소개팅",
            content: "소개팅의 추억을 공유하세요",
          },
          {
            _id: "62cbcd3fa8c54f168a6de004",
            title: "밸런스게임",
            content: "추억을 공유하세요",
          },
          {
            _id: "62cbcd43a8c54f168a6de005",
            title: "IF",
            content: "추억을 공유하세요",
          },
          {
            _id: "62cbcd4aa8c54f168a6de006",
            title: "진지한 대화",
            content: "추억을 공유하세요",
          },
          {
            _id: "62cbcd4ea8c54f168a6de007",
            title: "아이스브레이킹",
            content: "추억을 공유하세요",
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
