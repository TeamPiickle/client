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
  {
    prevPage: "/userinfo",
  },
  {
    prevPage: "/userProfile",
  },
]; //3-4번째 페이지는 임의로 이름 설정
