import Footer from "../common/Footer";
import Header from "../common/Header";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import CTABtn from "./CTABtn";
import MoodPiickle from "./MoodPiickle";
import PiickleMe from "./PiickleMe";
import { St } from "./style";

export default function Main() {
  return (
    <St.MainPage>
      <Header />
      <Banner />
      <BestPiickle />
      <MoodPiickle />
      {/* PiickleMe 폰트 수정해야 함 <-- 프로토타이핑 디자인 요청 */}
      <PiickleMe />
      <Footer />
      <CTABtn />
    </St.MainPage>
  );
}
