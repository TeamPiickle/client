import MyInfo from "./MyInfo";
import MyPiickle from "./MyPiickle";
import MySetting from "./MySetting";
import { St } from "./style";

export default function MyPage() {
  return (
    <St.MyPage>
      <MyInfo />
      <MyPiickle />
      <MySetting />
    </St.MyPage>
  );
}
