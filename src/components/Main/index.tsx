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
      <PiickleMe />
      <Footer />
      <CTABtn />
    </St.MainPage>
  );
}
