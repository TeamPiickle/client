import { ImgPiickleLoading } from "../../../asset/image";
import { St } from "./style";

export default function Loading() {
  return (
    <St.Root>
      <St.ImageWrapper>
        <img src={ImgPiickleLoading} alt="피클 로딩" />
      </St.ImageWrapper>
    </St.Root>
  );
}
