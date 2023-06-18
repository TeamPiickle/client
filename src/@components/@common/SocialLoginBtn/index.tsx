import { PropsWithChildren } from "react";

import { IcKakaoLogo, IcNaverLogo } from "../../../asset/icon";
import * as St from "./style";

type BtnTheme = "KAKAO" | "NAVER";
interface ButtonContents {
  theme: BtnTheme;
  btnText: string;
  clickHandler: () => void;
}

export default function SocialLoginBtn(props: PropsWithChildren<ButtonContents>) {
  const { theme, btnText, clickHandler } = props;

  const logoTheme = theme === "KAKAO" ? <IcKakaoLogo /> : <IcNaverLogo />;

  return (
    <St.LoginBtn btntype={theme} onClick={clickHandler}>
      <St.BtnLogo>{logoTheme}</St.BtnLogo>
      <St.BtnText texttype={theme}>{btnText}</St.BtnText>
    </St.LoginBtn>
  );
}
