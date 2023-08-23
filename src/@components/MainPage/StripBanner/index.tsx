import { IcSocialLoginLogos } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import * as St from "./style";

export default function StripBanner() {
  return (
    <St.Container to={routePaths.Login} className={GTM_CLASS_NAME.mainBannerNotice}>
      <St.ContentWrapper className={GTM_CLASS_NAME.mainBannerNotice}>
        <St.Content className={GTM_CLASS_NAME.mainBannerNotice}>소셜로그인하고 북마크 기능을 확인해보세요!</St.Content>
        <St.SubContent className={GTM_CLASS_NAME.mainBannerNotice}>
          소셜로그인과 북마크 기능인 ‘마이피클’을 이용해 편하게 피클해요!
        </St.SubContent>
      </St.ContentWrapper>
      <IcSocialLoginLogos />
    </St.Container>
  );
}
