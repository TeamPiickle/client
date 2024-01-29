import { lazy } from "react";

import CTABtn from "../@common/CTABtn";
import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import ObserverSection from "../@common/ObserverSection";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import StripBanner from "./StripBanner";
import { St } from "./style";
import TopicLink from "./TopicLink";

//const UpdateModal = lazy(() => import("./UpdateModal"));
const MoodPiickle = lazy(() => import("./MoodPiickle"));
const Medley = lazy(() => import("./Medley"));
const PiickleMe = lazy(() => import("./PiickleMe"));

export default function MainPage() {
  useGTMPage();

  return (
    <St.MainPage>
      <Header />

      <SuspenseBoundary bgColor="white">
        <Banner />
      </SuspenseBoundary>

      <SuspenseBoundary bgColor="white">
        <BestPiickle />
      </SuspenseBoundary>

      <StripBanner />

      <SuspenseBoundary>
        <ObserverSection>
          <MoodPiickle />
        </ObserverSection>
      </SuspenseBoundary>

      <SuspenseBoundary>
        <ObserverSection>
          <Medley />
        </ObserverSection>
      </SuspenseBoundary>

      {/* <div ref={piickleMeObsvRef} style={{ minHeight: "62rem" }}>
        {isVisiblePiickleMe && (
          <SuspenseBoundary>
            <PiickleMe />
          </SuspenseBoundary>
        )}
      </div> */}

      <TopicLink />

      <Footer />
      <CTABtn />

      {/* <SuspenseBoundary bgColor="white">
        <UpdateModal />
      </SuspenseBoundary> */}
    </St.MainPage>
  );
}
