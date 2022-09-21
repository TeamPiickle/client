import { IcFullHeart, IcRightArrow } from "../../../asset/icon/index";
import { routePaths } from "../../../core/routes/path";
import { St } from "./style";

export default function MyPiickle() {
  return (
    <St.MyPiickleContainer>
      <St.MyPiickleWrapper>
        <IcFullHeart />
        <St.TitleWrapper>
          <St.Title>My Piickle</St.Title>
          <St.SubTitle>내가 저장한 피클들</St.SubTitle>
        </St.TitleWrapper>
      </St.MyPiickleWrapper>
      <St.MoveButton to={routePaths.BookmarkPage} className="GTM_GpMyPiickle">
        <St.MoveButtonTitle>카드 모아보기</St.MoveButtonTitle>
        <IcRightArrow />
      </St.MoveButton>
    </St.MyPiickleContainer>
  );
}
