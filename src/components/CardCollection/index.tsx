import { St } from "./style";

export default function CardCollection() {
  return (
    <St.MainPage>
      <St.Card>
        <St.TagsWrapper>ㄴㅁㅇㄹ</St.TagsWrapper>
        <St.ContentWrapper>우리집공양추르하ㅐ</St.ContentWrapper>
        <St.HeartWrapper>
          <St.IcEmptyHeart />
          <St.IcFullHeart />
        </St.HeartWrapper>
      </St.Card>
    </St.MainPage>
  );
}
