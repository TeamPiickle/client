//import { lazy, Suspense } from "react";

import CTABtn from "../@common/CTABtn";
import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import Medley from "./Medley";
import MoodPiickle from "./MoodPiickle";
import PiickleMe from "./PiickleMe";
import StripBanner from "./StripBanner";
import { St } from "./style";

//const UpdateModal = lazy(() => import("./UpdateModal"));

export default function MainPage() {
  useGTMPage();

  return (
    <St.MainPage>
      <Header />

      <Banner />

      <SuspenseBoundary bgColor="white">
        <BestPiickle />
      </SuspenseBoundary>

      <StripBanner />

      <SuspenseBoundary bgColor="white">
        <MoodPiickle />
      </SuspenseBoundary>

      <SuspenseBoundary bgColor="white">
        <Medley />
      </SuspenseBoundary>

      <SuspenseBoundary bgColor="white">
        <PiickleMe />
      </SuspenseBoundary>

      <Footer />
      <CTABtn />
    </St.MainPage>
  );
}
