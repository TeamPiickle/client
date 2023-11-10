import { lazy } from "react";

import CTABtn from "../@common/CTABtn";
import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
import useObserverSection from "./hooks/useObserverSection";
import StripBanner from "./StripBanner";
import { St } from "./style";
import TopicLink from "./TopicLink";

//const UpdateModal = lazy(() => import("./UpdateModal"));
const MoodPiickle = lazy(() => import("./MoodPiickle"));
const Medley = lazy(() => import("./Medley"));
const PiickleMe = lazy(() => import("./PiickleMe"));

export default function MainPage() {
  useGTMPage();

  const { isVisibleSection: isVisibleMoodPiickle, intersectionObserverRef: moodPiickleObsvRef } = useObserverSection();
  const { isVisibleSection: isVisibleMedly, intersectionObserverRef: medlyObsvRef } = useObserverSection();
  const { isVisibleSection: isVisiblePiickleMe, intersectionObserverRef: piickleMeObsvRef } = useObserverSection();

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

      <div ref={moodPiickleObsvRef} style={{ minHeight: "45.6rem" }}>
        {isVisibleMoodPiickle && (
          <SuspenseBoundary>
            <MoodPiickle />
          </SuspenseBoundary>
        )}
      </div>

      <div ref={medlyObsvRef} style={{ minHeight: "26.8rem" }}>
        {isVisibleMedly && (
          <SuspenseBoundary>
            <Medley />
          </SuspenseBoundary>
        )}
      </div>

      <div ref={piickleMeObsvRef} style={{ minHeight: "62rem" }}>
        {isVisiblePiickleMe && (
          <SuspenseBoundary>
            <PiickleMe />
          </SuspenseBoundary>
        )}
      </div>

      <TopicLink />

      <Footer />
      <CTABtn />

      {/* <SuspenseBoundary bgColor="white">
        <UpdateModal />
      </SuspenseBoundary> */}
    </St.MainPage>
  );
}
