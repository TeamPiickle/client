import { PropsWithChildren } from "react";

import { /*IcKakaoLogo,*/ IcNaverLogo } from "../../../asset/icon";
import * as St from "./style";

type BtnTheme = "KAKAO" | "NAVER";
interface ButtonContents {
  theme: BtnTheme;
  BtnText: string;
}

export default function SocialLoginBtn(props: PropsWithChildren<ButtonContents>) {
  const { theme, BtnText } = props;

  const logoTheme = theme === "KAKAO" ? null /*IcKakaoLogo*/ : <IcNaverLogo />;

  return (
    <St.LoginBtn bgColor={theme}>
      <St.BtnLogo>{logoTheme}</St.BtnLogo>
      <St.BtnText>{BtnText}</St.BtnText>
    </St.LoginBtn>
  );
}
