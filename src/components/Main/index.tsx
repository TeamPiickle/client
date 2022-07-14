import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import CTABtn from "./CTABtn";
import Footer from "./Footer";
import MoodPiickle from "./MoodPiickle";
import PiickleMe from "./PiickleMe";
import { St } from "./style";

export default function Main() {
  return (
    <St.MainPage>
      <Banner />
      <BestPiickle />
      <MoodPiickle />
      <PiickleMe />
      <CTABtn />
      <Footer />
    </St.MainPage>
  );
}
