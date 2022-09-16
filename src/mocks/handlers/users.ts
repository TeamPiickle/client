import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const usersHandler = [
  rest.post(`${process.env.REACT_APP_BASE_URL}${PATH.USERS_}/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: "로그인 성공",
        data: {
          _id: "example id",
          accessToken: "example token",
        },
      }),
    );
  }),

  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.USERS_}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          name: "example name",
          nickname: "example nickname",
          email: "example email",
          profileImageUrl: "example profile_image",
        },
      }),
    );
  }),

  rest.post(`${process.env.REACT_APP_BASE_URL}${PATH.USERS_}/bookmarks`, (req, res, ctx) => {
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

  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.USERS_}/bookmarks`, (req, res, ctx) => {
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
