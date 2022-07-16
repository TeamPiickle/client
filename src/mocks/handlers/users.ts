import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const usersHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.USERS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          name: "example name",
          nickname: "example nickname",
          email: "example email",
          profile_image_url: "example profile_image",
        },
      }),
    );
  }),

  rest.post(`${process.env.REACT_APP_BASE_URL}${PATH.USERS}/bookmarks`, (req, res, ctx) => {
    const requestBody = req.bodyUsed;

    return res(
      ctx.status(200),
      ctx.json({
        message: "북마크 생성 성공",
        data: {
          _id: `${requestBody}`,
        },
      }),
    );
  }),

  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.USERS}/bookmarks`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            cardId: "6290145b6af16276098d04d9",
            content: "민초는 맛있다",
          },
          {
            cardId: "6290145b6af16276098d04d9",
            content: "민초는 맛있다",
          },
        ],
      }),
    );
  }),
];
