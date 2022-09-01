export const routePaths = {
  Main: "/",
  Login: "/login",
  Category: "/category",
  CardCollection: "/card-collection",
  Vote: "/vote",
  VoteId: "/:voteId",
  MyPage: "/my-page",
  BookmarkPage: "/bookmark",
  JoinAgree: "/join-agree",
  EmailAuthentication: "/email-authentication",
  EmailConfirm: "/email-confirm",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
