import { routePaths } from "./../routes/path";
export type PrevPages = {
  prevPage: string;
};

export const prevPages: PrevPages[] = [
  {
    prevPage: routePaths.Main,
  },
  {
    prevPage: routePaths.EmailAuthentication,
  },
  {
    prevPage: routePaths.EmailConfirm,
  },
  //3-4번째 페이지는 임의로 이름 설정
  {
    prevPage: "/userinfo",
  },
  {
    prevPage: "/userProfile",
  },
  {
    prevPage: routePaths.JoinAgree,
  },
];
