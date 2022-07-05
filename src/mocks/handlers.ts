import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post(`${process.env.REACT_APP_IP}/review`, (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    );
  }),
  // Handles a GET /user request
  rest.get(`${process.env.REACT_APP_IP}/review`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            totalAverage: 3.7,
            reviewImage:
              "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjFfMTEy%2FMDAxNjQwMDg4OTY1MDk4.ut76MNyIXp9e_hC4XoTfAjYKf3fk5cWXmZtKrCuv7eYg.tGqVunqENGLymUZFksmPoDJuz-dgu86hZefpAadg4U4g.JPEG.idgodhappy%2F20211220025238_IMG_0565.JPG&type=a340",
            comment: "튼튼해서 정말 좋아요 다른분들도 한번 사용해보시면 좋을거 같아요.",
            createdAt: "2022-05-21T14:46:00.000Z",
          },
          {
            totalAverage: 4.9,
            reviewImage:
              "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMDNfMjgz%2FMDAxNjMzMjY3NDU5NTMy.Pa3apAEZ3R46rQKh6S8aQfka0M22dUI3qIe1Loulvjwg.RvERH9LA7sgab2g2UoUH3rXnEDVwKQLJDWoWXVUbalIg.JPEG.kyensu211%2FIMG_0673.jpg&type=a340",
            comment: "튼튼해서 정말 좋아요 다른분들도 한번 사용해보시면 좋을거 같아요.",
            createdAt: "2022-05-21T14:47:00.000Z",
          },
          {
            totalAverage: 4.2,
            reviewImage:
              "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjFfMTEy%2FMDAxNjQwMDg4OTY1MDk4.ut76MNyIXp9e_hC4XoTfAjYKf3fk5cWXmZtKrCuv7eYg.tGqVunqENGLymUZFksmPoDJuz-dgu86hZefpAadg4U4g.JPEG.idgodhappy%2F20211220025238_IMG_0565.JPG&type=a340",
            comment: "튼튼해서 정말 좋아요 다른분들도 한번 사용해보시면 좋을거 같아요.",
            createdAt: "2022-05-21T14:48:00.000Z",
          },
          {
            totalAverage: 2.5,
            reviewImage:
              "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMDNfMjgz%2FMDAxNjMzMjY3NDU5NTMy.Pa3apAEZ3R46rQKh6S8aQfka0M22dUI3qIe1Loulvjwg.RvERH9LA7sgab2g2UoUH3rXnEDVwKQLJDWoWXVUbalIg.JPEG.kyensu211%2FIMG_0673.jpg&type=a340",
            comment: "튼튼해서 정말 좋아요 다른분들도 한번 사용해보시면 좋을거 같아요.",
            createdAt: "2022-05-21T14:49:00.000Z",
          },
        ],
      }),
    );
  }),
];
