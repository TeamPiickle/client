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
  Delete: "/delete",

  Join_: "/join/",
  Join_Agree: "agree",
  Join_UserProfile: "user-profile",
  Join_UserInfo: "user-info",
};

export type RoutePaths = typeof routePaths[keyof typeof routePaths];
