import SocialLoginBtn from "../../@common/SocialLoginBtn";
import * as St from "./style";

export default function SocialLogin() {
  return (
    <St.Container>
      <St.ContentsWrapper>
        <St.Line />
        <St.Contents>간편 로그인으로 피클 회원이 되어보세요</St.Contents>
      </St.ContentsWrapper>
      <SocialLoginBtn theme="KAKAO" BtnText={"카카오 로그인"} />
      <SocialLoginBtn theme="NAVER" BtnText={"네이버 로그인"} />
    </St.Container>
  );
}
