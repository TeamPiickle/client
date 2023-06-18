import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../../../util/login/oAuth";
import SocialLoginBtn from "../../@common/SocialLoginBtn";
import * as St from "./style";

export default function SocialLogin() {
  return (
    <St.Container>
      <St.ContentsWrapper>
        <St.Line />
        <St.Contents>간편 로그인으로 피클 회원이 되어보세요</St.Contents>
      </St.ContentsWrapper>
      <SocialLoginBtn theme="KAKAO" btnText={"카카오 로그인"} authUrl={KAKAO_AUTH_URL} />
      <SocialLoginBtn theme="NAVER" btnText={"네이버 로그인"} authUrl={NAVER_AUTH_URL} />
    </St.Container>
  );
}
