import { PropsWithChildren } from "react";

import { IcKakaoLogo, IcNaverLogo } from "../../../asset/icon";
import * as St from "./style";

type BtnTheme = "KAKAO" | "NAVER";
interface ButtonContents {
  theme: BtnTheme;
  BtnText: string;
  clickHandler: () => void;
}

export default function SocialLoginBtn(props: PropsWithChildren<ButtonContents>) {
  const { theme, BtnText, clickHandler } = props;

  const logoTheme = theme === "KAKAO" ? <IcKakaoLogo /> : <IcNaverLogo />;

  return (
    <St.LoginBtn bgColor={theme} onClick={clickHandler}>
      <St.BtnLogo>{logoTheme}</St.BtnLogo>
      <St.BtnText fontColor={theme}>{BtnText}</St.BtnText>
    </St.LoginBtn>
  );
}
