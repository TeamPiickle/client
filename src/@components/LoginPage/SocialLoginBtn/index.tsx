import { IcKakaoLogo, IcNaverLogo } from "../../../asset/icon";
import * as St from "./style";

type BtnTheme = "KAKAO" | "NAVER";
interface ButtonContents {
  theme: BtnTheme;
  btnText: string;
  authUrl: string;
}

export default function SocialLoginBtn(props: ButtonContents) {
  const { theme, btnText, authUrl } = props;

  const logoTheme = theme === "KAKAO" ? <IcKakaoLogo /> : <IcNaverLogo />;

  return (
    <St.Container linktype={theme} href={authUrl}>
      <St.Logo>{logoTheme}</St.Logo>
      <St.Text texttype={theme}>{btnText}</St.Text>
    </St.Container>
  );
}
