import { lazy, Suspense } from "react";

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

const UpdateModal = lazy(() => import("./UpdateModal"));

export default function MainPage() {
  useGTMPage();

  return (
    <St.MainPage>
      <Header />
      <Banner />
      <BestPiickle />
      <MoodPiickle />
      <Medley />
      <StripBanner />
      <PiickleMe />
      <Footer />
      <CTABtn />
      <Suspense>
        <UpdateModal />
      </Suspense>
    </St.MainPage>
  );
}
