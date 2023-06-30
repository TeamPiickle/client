import { IcLeftSpeechBubble, IcRightSpeechBubble } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import Header from "./../../@common/Header";
import * as St from "./style";

export default function SuccessPage() {
  return (
    <St.SuceessPage>
      <Header />
      <St.ImgContainer>
        <IcLeftSpeechBubble />
        <IcRightSpeechBubble />
      </St.ImgContainer>
      <St.WelcomeText>
        피클님 반가워요!
        <br />
        즐거운 대화를 나누러 가볼까요?
      </St.WelcomeText>
      <St.GoHomeBtn to={routePaths.Main}>홈으로 가기</St.GoHomeBtn>
      <St.GoMypageBtn to={routePaths.MyPage}>프로필 설정하기</St.GoMypageBtn>
    </St.SuceessPage>
  );
}
