import { useRecoilState } from "recoil";

import { userTokenAtom } from "../atom/auth";

export default function useAuth() {
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);

  return {
    isLogin: !!userToken,
    login: (token: string) => {
      setUserToken(token);
    },
    logout: () => {
      setUserToken(null);
    },
  };
}
