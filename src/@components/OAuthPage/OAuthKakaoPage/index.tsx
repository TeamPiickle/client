import axios from "axios";
import qs from "qs";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { loginApi } from "../../../core/api/login";
import useAuth from "../../../core/hooks/useAuth";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";

export default function OAuthKakaoPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { login } = useAuth();
  const loginWithUserToken = (accessToken: string) => {
    login(accessToken);
    navigate(routePaths.Main);
  };

  const getKakaoToken = async (authorizationCode: string) => {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify({
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
        redirect_uri: import.meta.env.DEV
          ? "http://127.0.0.1:5173/oauth/kakao"
          : import.meta.env.VITE_KAKAO_REDIRECT_URI,
        code: authorizationCode,
        client_secret: import.meta.env.VITE_KAKAO_CLIENT_SECRET,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
    );
    return response.data.access_token;
  };

  const handlePostKakaoLogin = async (accessToken: string) => {
    const data = await loginApi.postSocialLogin("kakao", accessToken, "", "");

    data.data.newMember
      ? navigate(`${routePaths.Join_}${routePaths.Join_Agree}`, { state: { socialLoginToken: data.data.accessToken } })
      : loginWithUserToken(data.data.accessToken);
  };

  useEffect(() => {
    const authorizationCode = searchParams.get("code");
    if (!authorizationCode) return alert("다시 시도해주세요");

    (async () => {
      const token = await getKakaoToken(authorizationCode);
      handlePostKakaoLogin(token);
    })();
  }, []);

  return <Loading backgroundColor="white" />;
}
