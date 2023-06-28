import axios from "axios";
import qs from "qs";
import { useEffect } from "react";

import Loading from "../../@common/Loading";

export default function OAuthKakaoPage() {
  const code = new URL(window.location.href).searchParams.get("code");

  const getKakaoToken = async () => {
    try {
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        qs.stringify({
          grant_type: "authorization_code",
          client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
          redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
          code: code,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
      );

      if (response.data.access_token) {
        console.log("access_token:", response.data.access_token);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (code) getKakaoToken();
  });

  return <Loading backgroundColor="white" />;
}
