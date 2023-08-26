import { IcSocialLoginLogos } from "../../../asset/icon";
import useAuth from "../../../core/hooks/useAuth";
import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import * as St from "./style";

export default function StripBanner() {
  const { isLogin } = useAuth();

  if (isLogin) {
    return (
      <St.EventContainer
        to={`${routePaths.CardCollection}?type=${LocationType.EVENT}`}
        className={GTM_CLASS_NAME.mainBannerEvent}>
        <St.EventContentWrapper className={GTM_CLASS_NAME.mainBannerEvent}>
          <St.Content className={GTM_CLASS_NAME.mainBannerEvent} islogin={isLogin}>
            이벤트 참여하고 치킨 받아가세요!
          </St.Content>
          <St.SubContent className={GTM_CLASS_NAME.mainBannerEvent} islogin={isLogin}>
            피클의 미래 모습을 체험해 볼 수 있어요!
          </St.SubContent>
        </St.EventContentWrapper>
      </St.EventContainer>
    );
  }

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
