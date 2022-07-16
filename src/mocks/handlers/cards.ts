import { rest } from "msw";

import { PATH } from "../../core/api/common/constants";

export const cardsHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}${PATH.CARDS}/best-5`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: "6290145b6af16276098d04d9",
            category: ["재미", "IF 밸런스게임"],
            content: "서해은은 귀여울 뿐만 아니라 사랑스럽다",
          },
          {
            _id: "6290145b6af16276098d04d8",
            category: ["재미", "IF 밸런스게임"],
            content: "이주함은 킹왕짱짱짱 머시써 라고할뻔~ 는구라",
          },
          {
            _id: "6290145b6af16276098d04d7",
            category: ["재미", "IF 밸런스게임"],
            content: "앙큼지영은 진오씨와 912일 ~ 혜은이랑은 이제 10일이지롱 부럽지 ㅋㅋ ",
          },
          {
            _id: "6290145b6af16276098d04d6",
            category: ["재미", "IF 밸런스게임"],
            content: "고나연 1349일 동안 너무 고마워",
          },
          {
            _id: "6290145b6af16276098d04d5",
            category: ["재미", "IF 밸런스게임"],
            content: "상대방의 첫인상을 말해주세요",
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

  rest.get(`${process.env.REACT_APP_BASE_URL}/cards*`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
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
          {
            _id: "62ce6aeba89cb162e6c24d1e",
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
              "단체",
              "상관없음",
              "새로워요",
              "친근해요",
              "깊어요",
            ],
          },
        ],
      }),
    );
  }),
];
