//import { lazy } from "react";

import { lazy, useEffect, useState } from "react";

import CTABtn from "../@common/CTABtn";
import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import useIntersectionObserver from "../@common/hooks/useIntersectionObserver";
import SuspenseBoundary from "../@common/SuspenseBoundary";
import Banner from "./Banner";
import BestPiickle from "./BestPiickle";
//import Medley from "./Medley";
//import MoodPiickle from "./MoodPiickle";
//import PiickleMe from "./PiickleMe";
import StripBanner from "./StripBanner";
import { St } from "./style";
import TopicLink from "./TopicLink";

//const UpdateModal = lazy(() => import("./UpdateModal"));
const MoodPiickle = lazy(() => import("./MoodPiickle"));
//const Medley = lazy(() => import("./Medley"));
//const PiickleMe = lazy(() => import("./PiickleMe"));

export default function MainPage() {
  useGTMPage();
  const [isShow, setIsShow] = useState(false);

  const intersectionObserverRef = useIntersectionObserver(
    (entry, observer) => {
      if (entry.isIntersecting && entry.intersectionRect.height !== entry.target.clientHeight) {
        setIsShow(true);
        observer.unobserve(entry.target);
        return;
      }
      setIsShow(false);
    },
    { threshold: 0.3 },
  );

  useEffect(() => {
    console.log(isShow);
  }, [isShow]);

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

      <div ref={intersectionObserverRef} style={{ minHeight: "45.6rem" }}>
        {isShow && (
          <SuspenseBoundary>
            <MoodPiickle />
          </SuspenseBoundary>
        )}
      </div>
      {/* <SuspenseBoundary bgColor="white">
        <Medley />
      </SuspenseBoundary>

      <SuspenseBoundary bgColor="white">
        <PiickleMe />
      </SuspenseBoundary> */}

      <TopicLink />

      <Footer />
      <CTABtn />

      {/* <SuspenseBoundary bgColor="white">
        <UpdateModal />
      </SuspenseBoundary> */}
    </St.MainPage>
  );
}
