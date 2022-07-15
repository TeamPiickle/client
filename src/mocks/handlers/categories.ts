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

  rest.get(`${process.env.REACT_APP_BASE_URL}/categories/:categoryId`, (req, res, ctx) => {
    // const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          categoryId: "6290145b6af16276098d04d9",
          cardList: [
            {
              cardId: "6290145b6af16276098d04d9",
              content: "민초는 맛있다",
              gender: [1, 2],
              ageGroup: [2, 3, 4],
              category: [2],
              intimacy: 1,
              bookmarkId: "6290145b6af16276098d04d9",
              isbookmark: true,
            },
            {
              cardId: "6290145b6af16276098d04d9",
              content: "민초는 맛있다",
              gender: [1, 2],
              ageGroup: [2, 3, 4],
              category: [2],
              intimacy: 1,
              bookmarkId: "6290145b6af16276098d04d9",
              isbookmark: true,
            },
            {
              cardId: "6290145b6af16276098d04d9",
              content: "민초는 맛있다",
              gender: [1, 2],
              ageGroup: [2, 3, 4],
              category: [2],
              intimacy: 1,
              bookmarkId: "6290145b6af16276098d04d9",
              isbookmark: true,
            },
            {
              cardId: "6290145b6af16276098d04d9",
              content: "민초는 맛있다",
              gender: [1, 2],
              ageGroup: [2, 3, 4],
              category: [2],
              intimacy: 1,
              bookmarkId: "6290145b6af16276098d04d9",
              isbookmark: true,
            },
          ],
        },
      }),
    );
  }),
];
