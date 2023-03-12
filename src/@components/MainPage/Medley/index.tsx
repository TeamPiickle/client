import Loading from "../../@common/Loading";
import { useMedleyLists } from "../hooks/useMedleyLists";
import MedleyCard from "./MedleyCard";
import St from "./style";

export default function Medley() {
  const { medleyLists } = useMedleyLists();

  return (
    <St.Container>
      <St.Title>👍 여러분을 위해 피클이 직접 뽑은 주제들!</St.Title>
      {medleyLists ? (
        <St.Medley>
          {medleyLists &&
            medleyLists.data.map((medleyLists, idx) => {
              return <MedleyCard key={medleyLists._id} medleyCard={medleyLists} medleyIdx={idx} />;
            })}
        </St.Medley>
      ) : (
        <Loading backgroundColor="white" />
      )}
    </St.Container>
  );
}
