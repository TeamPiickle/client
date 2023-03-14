import useModal from "../../../@common/hooks/useModal";
import MedleyPreview from "../MedleyPreview";
import St from "./style";

interface MedleyCardProps {
  medleyCard: {
    _id: string;
    coverTitle: string;
    title: string;
    sticker: string;
    description: string;
    previewCards: { _id: string; content: string }[];
  };
  medleyIdx: number;
}

export default function MedleyCard(props: MedleyCardProps) {
  const { medleyCard, medleyIdx } = props;
  const { isModalOpen, toggleModal } = useModal();

  return (
    <>
      <St.MedleyWrapper medleyId={medleyCard._id} onClick={toggleModal}>
        <St.ContentTag>{medleyCard.sticker}</St.ContentTag>
        <St.ContentTitle>{medleyCard.coverTitle}</St.ContentTitle>
        {isModalOpen && <MedleyPreview closeHandler={toggleModal} medleyPreview={medleyCard} medleyIdx={medleyIdx} />}
      </St.MedleyWrapper>
    </>
  );
}
