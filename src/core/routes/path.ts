export const routePaths = {
  Main: "/",
  Login: "/login",
  Category: "/category",
  CardCollection: "/card-collection",
  Vote: "/vote",
  VoteId: "/:voteId",
  MyPage: "/my-page",
  Bookmark: "/bookmark",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
