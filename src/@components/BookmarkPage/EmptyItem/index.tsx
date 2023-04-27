import * as St from "./style";

export default function EmptyItem() {
  return (
    <St.Root>
      <St.IcImageSearch />
      <St.Desc>아직 북마크한 대화 주제가 없어요 </St.Desc>
      <St.Desc>마음에 드는 대화주제를 북마크해보세요</St.Desc>
      <St.LinkBestPiickle>가장 인기있는 대화주제 보러가기 →</St.LinkBestPiickle>
    </St.Root>
  );
}
