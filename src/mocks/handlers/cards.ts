import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const cardsHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.CARDS}/best`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          _id: "62d55d73eda8dbf570cbda81",
          title: "더미",
          cardList: [
            {
              _id: "62d55098df6e93500ec2b17d",
              content: "베스트 지리ㅣ릴리안림나림ㄴ아링나링나리",
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
  rest.get(`${process.env.REACT_APP_BASE_URL}/cards?*`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          _id: "62d55d73eda8dbf570cbda81",
          title: "더미",
          cardList: [
            {
              _id: "62d55098df6e93500ec2b17d",
              content: "필터or전부 지리ㅣ릴리안림나림ㄴ아링나링나리",
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
