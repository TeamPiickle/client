import { rest } from "msw";

export const categoriesHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}/categories`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            categoryId: "6290145b6af16276098d04d9",
            title: "동아리",
          },
          {
            categoryId: "6290145b6af16276098d04d9",
            title: "솝트",
          },
          {
            categoryId: "6290145b6af16276098d04d9",
            title: "커플",
          },
          {
            categoryId: "6290145b6af16276098d04d9",
            title: "찐친",
          },
          {
            categoryId: "6290145b6af16276098d04d9",
            title: "회식",
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
