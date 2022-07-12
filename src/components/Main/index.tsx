import { headingTitles } from "../../core/main/headingTitles";
import BestPiickle from "./BestPiickle";
import HeadingTitleContainer from "./common/HeadingTitleContainer";
import CTABtn from "./CTABtn";
import PiickleMe from "./PiickleMe";

export default function Main() {
  return (
    <main>
      <BestPiickle />
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <PiickleMe />
      <CTABtn />
    </main>
  );
}
