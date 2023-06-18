export const routePaths = {
  Main: "/",
  Login: "/login",
  Category: "/category",
  CardCollection: "/card-collection",
  Vote: "/vote",
  VoteId: "/:voteId",
  MyPage: "/my-page",
  BookmarkPage: "/bookmark",
  Delete: "/delete",

  OAuth_: "/oauth/",
  OAuth_Kakao: "kakao",
  OAuth_Naver: "naver",

  Join_: "/join/",
  Join_Agree: "agree",
  // Join_EmailAuthentication: "email-authentication",
  // Join_EmailConfirm: "email-confirm",
  Join_UserProfile: "user-profile",
  Join_UserInfo: "user-info",
};

export type RoutePaths = (typeof routePaths)[keyof typeof routePaths];
