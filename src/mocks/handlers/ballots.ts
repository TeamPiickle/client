import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const ballotsHandler = [
  rest.post(`${process.env.REACT_APP_BASE_URL}${PATH.BALLOTS}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "투표 성공" }));
  }),

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
            _id: "62cc022f2e3dd7425047e382",
            title: "투표 주제 제목",
          },
          {
            _id: "62cc022f2e3dd7425047e383",
            title: "투표 주제 제목",
          },
          {
            _id: "62cc022f2e3dd7425047e384",
            title: "투표 주제 제목",
          },
        ],
      }),
    );
  }),

  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.BALLOTS}/:ballotTopicId`, (req, res, ctx) => {
    const { ballotTopicId } = req.params;
    const isLoginNVoted = false;

    let data = {};
    if (isLoginNVoted) {
      data = {
        ballotItems: [
          {
            _id: "어쩌구저ㄱ쩌구",
            status: 50,
            name: "호",
          },
          {
            _id: "ㅁㄴㅇㅁㄴㅇ",
            status: 30,
            content: "불",
          },
          {
            _id: "ㅁㄴㅇㅁㄴㅇ1",
            status: 20,
            content: "중",
          },
        ],
        userSelect: {
          _id: "62cff7e35b1e11673a0a8787",
          ballotItemId: "62cff6585b1e11673a0a8776",
        },
      };
    } else {
      data = {
        ballotItems: [
          {
            _id: "어쩌구저ㄱ쩌구",
            name: "호",
          },
          {
            _id: "ㅁㄴㅇㅁㄴㅇ",
            content: "불",
          },
          {
            _id: "ㅁㄴㅇㅁㄴㅇ1",
            content: "중",
          },
        ],
      };
    }

    return res(
      ctx.status(200),
      ctx.json({
        data,
      }),
    );
  }),
];
