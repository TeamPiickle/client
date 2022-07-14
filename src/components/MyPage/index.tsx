import MyInfo from "./MyInfo";
import MyPiickle from "./MyPiickle";
import { St } from "./style";

export default function MyPage() {
  return (
    <St.MyPage>
      <MyInfo />
      <MyPiickle />
    </St.MyPage>
  );
}
