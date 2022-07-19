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
              content: "만약, 나를 제외한\n모든 사람들이\n거짓말을 할 수 없게 된다면?",
              tags: ["#연애", "#연애초", "#설렘"],
              filter: ["남자", "여자", "10대", "20대", "30대", "커플", "상관없음", "친근해요"],
              isBookmark: true,
            },
            {
              _id: "62d55098df6e93500ec2b17f",
              content: "만약, 여행에 갔는데\n날씨 때문에\n모든 계획이 틀어진다면?",
              tags: ["#연애", "#연애초", "#설렘"],
              filter: ["남자", "여자", "10대", "20대", "30대", "커플", "상관없음", "친근해요"],
              isBookmark: true,
            },
            {
              _id: "62d55098df6e93500ec2b17g",
              content: "만약, 똑같은 영화를\n10번 봐야 한다면\n어떤 영화를 보고 싶은가요?",
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
