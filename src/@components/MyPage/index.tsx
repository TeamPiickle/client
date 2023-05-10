import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import useScroll from "../@common/hooks/useScrollToTop";
import MyInfo from "./MyInfo";
import MyPiickle from "./MyPiickle";
import MySetting from "./MySetting";
import { St } from "./style";

export default function MyPage() {
  useGTMPage();
  useScroll();

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
