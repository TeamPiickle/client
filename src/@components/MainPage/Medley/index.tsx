import useScrollableContainer from "../../@common/hooks/useScrollableContainer";
import Loading from "../../@common/Loading";
import { useMedleyLists } from "../hooks/useMedleyLists";
import MedleyCard from "./MedleyCard";
import St from "./style";

export default function Medley() {
  const { randomMedleyLists, isLoading } = useMedleyLists();
  const { scrollableContainerProps } = useScrollableContainer();

  if (isLoading) return <Loading backgroundColor="white" />;

  return (
    <St.Container>
      <St.Title>👍 여러분을 위해 피클이 직접 뽑은 주제들!</St.Title>
      <St.Medley>
        {randomMedleyLists &&
          randomMedleyLists.map((medleyCard) => <MedleyCard key={medleyCard._id} medleyCard={medleyCard} />)}
      </St.Medley>
    </St.Container>
  );
}
