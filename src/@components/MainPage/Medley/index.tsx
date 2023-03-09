import { useMedleyLists } from "../../../core/api/main";
import useModal from "../../@common/hooks/useModal";
import Loading from "../../@common/Loading";
import MedleyPreview from "./MedleyPreview";
import St from "./style";

export default function Medley() {
  const { medleyLists } = useMedleyLists();
  const { isModalOpen, toggleModal } = useModal();

  const MedleyCard = medleyLists?.data.map((medleyLists) => {
    return (
      <>
        {isModalOpen && <MedleyPreview closePreview={toggleModal} />}
        <St.MedleyWrapper key={medleyLists._id} onClick={toggleModal}>
          <St.ContentTag>{medleyLists.sticker}</St.ContentTag>
          <St.ContentTitle>{medleyLists.title}</St.ContentTitle>
        </St.MedleyWrapper>
      </>
    );
  });

  return (
    <St.Container>
      <St.Title>👍 여러분을 위해 피클이 직접 뽑은 주제들!</St.Title>
      {medleyLists ? <St.Medley>{MedleyCard}</St.Medley> : <Loading backgroundColor="white" />}
    </St.Container>
  );
}
