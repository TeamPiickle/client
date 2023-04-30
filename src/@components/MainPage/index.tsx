import { useEffect, useState } from "react";

import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import CTABtn from "./CTABtn";
import Medley from "./Medley";
import MoodPiickle from "./MoodPiickle";
import PiickleMe from "./PiickleMe";
import StripBanner from "./StripBanner";
import { St } from "./style";
import UpdateModal from "./UpdateModal";

export default function MainPage() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("isPopupShown");
    if (!isPopupShown) {
      setIsOpened(true);
      sessionStorage.setItem("isPopupShown", "true");
    }
  }, []);

  const handleCloseModal = () => {
    setIsOpened(false);
  };

  useGTMPage();
  return (
    <St.MainPage>
      <Header />
      <Banner />
      <BestPiickle />
      <Medley />
      <MoodPiickle />
      <StripBanner />
      <PiickleMe />
      <Footer />
      <CTABtn />
      {isOpened && <UpdateModal closeHandler={handleCloseModal} />}
    </St.MainPage>
  );
}
