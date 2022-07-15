import Header from "../common/Header";
import Footer from "../Main/Footer";
import MyInfo from "./MyInfo";
import MyPiickle from "./MyPiickle";
import MySetting from "./MySetting";
import { St } from "./style";

export default function MyPage() {
  return (
    <St.MyPage>
      <Header />
      <MyInfo />
      <MyPiickle />
      <MySetting />
      <Footer />
    </St.MyPage>
  );
}
