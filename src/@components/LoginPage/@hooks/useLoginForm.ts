import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../../../core/api/login";
import { routePaths } from "../../../core/routes/path";

export default function useLoginForm() {
  const navigate = useNavigate();
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [errorMessage, setErrorMessage] = useState({ emailError: "", passwordError: "" });

  const submitLoginForm = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // 피클 테스트 계정
    // LoginNGoMain(
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNmJiMzEwMWRiNGIyNmRhM2M5NWFlIn0sImlhdCI6MTY1ODM4NDIwMCwiZXhwIjoxNjg5OTIwMjAwfQ.G6vpi0Tr3LmALeUpQuvXXx_KjuROKHWMQ9UAtCMs8mY",
    // );

    try {
      const { data } = await loginApi.postLogin(inputRefs.current[0].value, inputRefs.current[1].value);
      LoginNGoMain(data.accessToken);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data;
        const errorStatus = errorData.status;

        switch (errorStatus) {
          case 200:
            break;
          case 400:
            setErrorMessage({ emailError: "", passwordError: "필요한 값이 없습니다." });
            break;
          case 401:
            if (errorData.message === "존재하지 않는 email 입니다.")
              setErrorMessage({ passwordError: "", emailError: "존재하지 않는 email 입니다." });
            else if (errorData.message === "비밀번호가 일치하지 않습니다.")
              setErrorMessage({ emailError: "", passwordError: "비밀번호가 일치하지 않습니다." });
            break;
          case 500:
            // 서버 내부 오류
            navigate(routePaths.Login);
            break;
          default:
            throw new Error("로그인 에러");
        }
      }
    }
  };

  const LoginNGoMain = (accessToken: string) => {
    localStorage.setItem("piickle-token", accessToken);
    navigate(routePaths.Main);
  };

  return { inputRefs, errorMessage, submitLoginForm };
}
