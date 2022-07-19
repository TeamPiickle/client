import { ImgPiickleLoading } from "../../../asset/image";
import { St } from "./style";

export default function Loading() {
  return (
    <St.Root>
      <img src={ImgPiickleLoading} alt="피클 로딩"></img>
    </St.Root>
  );
}
