import { MedleyCard as MedlyCardType } from "../../../../types/main";
import useModal from "../../../@common/hooks/useModal";
import MedleyPreview from "../MedleyPreview";
import St from "./style";

interface MedleyCardProps {
  medleyCard: MedlyCardType;
}

export default function MedleyCard(props: MedleyCardProps) {
  const { medleyCard } = props;
  const { isModalOpen, toggleModal } = useModal();

  return (
    <>
      <St.MedleyWrapper bgcolorId={medleyCard._id} onClick={toggleModal}>
        <St.ContentTag>{medleyCard.sticker}</St.ContentTag>
        <St.ContentTitle>{medleyCard.coverTitle}</St.ContentTitle>
      </St.MedleyWrapper>
      {isModalOpen && <MedleyPreview closeHandler={toggleModal} medleyCard={medleyCard} />}
    </>
  );
}
