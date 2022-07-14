import { rest } from "msw";

export const usersHandler = [
  rest.get(`${process.env.REACT_APP_BASE_URL}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            name: "Piickle",
            nickname: "피클깡패",
            email: "piickle_people@piickle.com",
            profile_image_url: "https://www.figma.com/file/RVx8bxqifqG59o4ri41Nx5/piickle_WF?node-id=1513%3A17119",
          },
          {
            name: "Piickle1",
            nickname: "피클깡패1",
            email: "piickle_people1@piickle.com",
            profile_image_url: "https://www.figma.com/file/RVx8bxqifqG59o4ri41Nx5/piickle_WF?node-id=1513%3A17119",
          },
          {
            name: "Piickle2",
            nickname: "피클깡패2",
            email: "piickle_people2@piickle.com",
            profile_image_url: "https://www.figma.com/file/RVx8bxqifqG59o4ri41Nx5/piickle_WF?node-id=1513%3A17119",
          },
          {
            name: "Piickle3",
            nickname: "피클깡패3",
            email: "piickle_people3@piickle.com",
            profile_image_url: "https://www.figma.com/file/RVx8bxqifqG59o4ri41Nx5/piickle_WF?node-id=1513%3A17119",
          },
          {
            name: "Piickle4",
            nickname: "피클깡패4",
            email: "piickle_people4@piickle.com",
            profile_image_url: "https://www.figma.com/file/RVx8bxqifqG59o4ri41Nx5/piickle_WF?node-id=1513%3A17119",
          },
        ],
      }),
    );
  }),
];
