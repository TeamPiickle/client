import { IcSocialLoginLogos } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import * as St from "./style";

export default function StripBanner() {
  return (
    <St.Container to={routePaths.Login}>
      <St.ContentWrapper>
        <St.Content>소셜로그인하고 북마크 기능을 확인해보세요!</St.Content>
        <St.SubContent>소셜로그인과 북마크 기능인 ‘마이피클’을 이용해 편하게 피클해요!</St.SubContent>
      </St.ContentWrapper>
      <IcSocialLoginLogos />
    </St.Container>
  );
}
