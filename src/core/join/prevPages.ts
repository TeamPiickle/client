import { routePaths } from "./../routes/path";
export type PrevPages = {
  prevPage: string;
};

export const prevPages: PrevPages[] = [
  {
    prevPage: routePaths.Main,
  },
  {
    prevPage: `${routePaths.Join_}${routePaths.Join_EmailAuthentication}`,
  },
  {
    prevPage: `${routePaths.Join_}${routePaths.Join_EmailConfirm}`,
  },
  {
    prevPage: "/userinfo",
  },
  {
    prevPage: `${routePaths.Join_}${routePaths.Join_UserProfile}`,
  },
  {
    prevPage: `${routePaths.Join_}${routePaths.Join_Agree}`,
  },
];
