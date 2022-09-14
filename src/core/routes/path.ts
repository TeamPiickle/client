/*
마지막 편집자: 22-09-03 joohaem
변경사항 및 참고:
  - 
    
고민점:
  - 
*/

export const routePaths = {
  Main: "/",
  Login: "/login",
  Category: "/category",
  CardCollection: "/card-collection",
  Vote: "/vote",
  VoteId: "/:voteId",
  MyPage: "/my-page",
  BookmarkPage: "/bookmark",

  Join_: "/join/",
  // JoinAgree: "/join-agree",
  Join_Agree: "agree",
  // EmailAuthentication: "/email-authentication",
  Join_EmailAuthentication: "email-authentication",
  // EmailConfirm: "/email-confirm",
  Join_EmailConfirm: "email-confirm",
  Join_UserProfile: "user-profile",
  Join_UserInfo: "user-info",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
