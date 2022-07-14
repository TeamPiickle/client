import { IcFullHeart } from "../../../asset/icon/index";
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
      <St.MoveButton type="button">카드모아보기</St.MoveButton>
    </St.MyPiickleContainer>
  );
}
