import { useRecoilState, useResetRecoilState } from "recoil";

import { userTokenAtom } from "../atom/auth";

export default function useAuth() {
  const resetUserToken = useResetRecoilState(userTokenAtom);
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);

  return {
    isLogin: !!userToken,
    login: (token: string) => {
      setUserToken(token);
    },
    logout: () => {
      resetUserToken();
    },
  };
}
