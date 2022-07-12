import BestPiickle from "./BestPiickle";
import HeadingTitleContainer from "./common/HeadingTitleContainer";
import CTABtn from "./CTABtn";
import PiickleMe from "./PiickleMe";

export default function Main() {
  return (
    <main>
      <BestPiickle />
      <HeadingTitleContainer
        headingTitles={{
          title: "Mood Piickle",
          content: "더욱 쉽게 피클을 즐길 수 있는 방법!\n지금 나의 무드에 맞는 카테고리를 골라보세요",
          isMoreBtn: true,
        }}
      />
      <PiickleMe />
      <CTABtn />
    </main>
  );
}
