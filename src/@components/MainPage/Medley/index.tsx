import useScrollableContainer from "../../@common/hooks/useScrollableContainer";
import Loading from "../../@common/Loading";
import { useMedleyLists } from "../hooks/useMedleyLists";
import MedleyCard from "./MedleyCard";
import St from "./style";

export default function Medley() {
  const { scrollableContainerProps } = useScrollableContainer();
  const { randomMedleyLists, isLoading } = useMedleyLists();

  if (isLoading) return <Loading backgroundColor="white" />;
  return (
    <St.Container>
      <St.TitleTag>💥 NEW 💥 새로운 기능 업데이트</St.TitleTag>
      <St.Title>
        새로운 대화카드 주제
        <br />
        업데이트
      </St.Title>
      <St.SubTitle>👇 나에게 딱 맞는 주제, 피클이 대신 골라드립니다 👇</St.SubTitle>
      <St.Medley {...scrollableContainerProps}>
        {randomMedleyLists &&
          randomMedleyLists.map((medleyCard) => <MedleyCard key={medleyCard._id} medleyCard={medleyCard} />)}
      </St.Medley>
    </St.Container>
  );
}
