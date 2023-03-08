import Footer from "../@common/Footer";
import Header from "../@common/Header";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import CTABtn from "./CTABtn";
import Medly from "./Medly";
import MoodPiickle from "./MoodPiickle";
import PiickleMe from "./PiickleMe";
import { St } from "./style";

export default function MainPage() {
  return (
    <St.MainPage>
      <Header />
      <Banner />
      <BestPiickle />
      <MoodPiickle />
      <Medly />
      <PiickleMe />
      <Footer />
      <CTABtn />
    </St.MainPage>
  );
}
