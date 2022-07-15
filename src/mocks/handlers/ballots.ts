import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const ballotsHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.BALLOTS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: "62cc022f2e3dd7425047e381",
            title: "인간관계에서 가장 중요하게 생각하는 것은?",
          },
          {
            _id: "62cc022f2e3dd7425047e381",
            title: "투표 주제 제목",
          },
          {
            _id: "62cc022f2e3dd7425047e381",
            title: "투표 주제 제목",
          },
          {
            _id: "62cc022f2e3dd7425047e381",
            title: "투표 주제 제목",
          },
        ],
      }),
    );
  }),
];
