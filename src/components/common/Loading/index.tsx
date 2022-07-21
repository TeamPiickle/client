import { ImgPiickleLoading } from "../../../asset/image";
import Header from "../Header";
import { St } from "./style";

interface LoadingProps {
  backgroundColor: string;
}

export default function Loading(props: LoadingProps) {
  const { backgroundColor } = props;

  return (
    <St.Root backgroundcolor={backgroundColor}>
      <Header />
      <St.ImageWrapper>
        <img src={ImgPiickleLoading} alt="피클 로딩" />
      </St.ImageWrapper>
    </St.Root>
  );
}
