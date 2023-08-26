import { IcLeftSpeechBubble, IcRightSpeechBubble } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import Header from "./../../@common/Header";
import * as St from "./style";

export default function SuccessPage() {
  return (
    <St.SuceessPage>
      <Header bgColor="pastelgreen" />
      <St.ImgContainer>
        <IcLeftSpeechBubble />
        <IcRightSpeechBubble />
      </St.ImgContainer>
      <St.WelcomeText>
        피클에 오신 것을 환영해요!
        <br />
        즐거운 대화를 나누러 가볼까요?
      </St.WelcomeText>
      <St.GoHomeBtn to={routePaths.Main}>홈으로 가기</St.GoHomeBtn>
      <St.GoMypageBtn to={routePaths.MyPage}>나만의 닉네임 설정하러 가기</St.GoMypageBtn>
    </St.SuceessPage>
  );
}
