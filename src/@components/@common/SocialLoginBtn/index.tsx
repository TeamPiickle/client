import { PropsWithChildren } from "react";

import { IcKakaoLogo, IcNaverLogo } from "../../../asset/icon";
import * as St from "./style";

type BtnTheme = "KAKAO" | "NAVER";
interface ButtonContents {
  theme: BtnTheme;
  btnText: string;
  authUrl: string;
}

export default function SocialLoginBtn(props: PropsWithChildren<ButtonContents>) {
  const { theme, btnText, authUrl } = props;

  const logoTheme = theme === "KAKAO" ? <IcKakaoLogo /> : <IcNaverLogo />;

  return (
    <a href={authUrl}>
      <St.LoginBtn btntype={theme}>
        <St.BtnLogo>{logoTheme}</St.BtnLogo>
        <St.BtnText texttype={theme}>{btnText}</St.BtnText>
      </St.LoginBtn>
    </a>
  );
}
