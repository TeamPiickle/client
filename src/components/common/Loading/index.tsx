import { ImgPiickleLoading } from "../../../asset/image";
import { St } from "./style";

interface LoadingProps {
  backgroundColor: string;
}

export default function Loading(props: LoadingProps) {
  const { backgroundColor } = props;

  return (
    <St.Root backgroundcolor={backgroundColor}>
      <St.ImageWrapper>
        <img src={ImgPiickleLoading} alt="피클 로딩" />
      </St.ImageWrapper>
    </St.Root>
  );
}
