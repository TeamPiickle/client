import { headingTitles } from "../../core/main/headingTitles";
import BestPiickle from "./BestPiickle";
import HeadingTitleContainer from "./common/HeadingTitleContainer";
import CTABtn from "./CTABtn";
import PiickleMe from "./PiickleMe";
import { St } from "./style";

export default function Main() {
  return (
    <St.MainPage>
      <BestPiickle />
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <PiickleMe />
      <CTABtn />
    </St.MainPage>
  );
}
