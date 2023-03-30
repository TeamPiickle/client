import { MedleyCard as MedlyCardType } from "../../../../types/main";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useModal from "../../../@common/hooks/useModal";
import MedleyPreview from "../MedleyPreview";
import St from "./style";

interface MedleyCardProps {
  medleyCard: MedlyCardType;
  canToggleModal: boolean;
}

export default function MedleyCard(props: MedleyCardProps) {
  const { medleyCard, canToggleModal } = props;
  const { isModalOpen, toggleModal } = useModal();
  const GTM_MEDLERY_KEY = medleyCard.sticker.slice(0, 2);

  return (
    <>
      <St.Container
        className={GTM_CLASS_NAME[`medley${GTM_MEDLERY_KEY}`]}
        onClick={() => {
          if (!canToggleModal) return;
          toggleModal();
        }}>
        <St.MedleyCard className={GTM_CLASS_NAME[`medley${GTM_MEDLERY_KEY}`]} bgcolorId={medleyCard._id}>
          <St.ContentTag className={GTM_CLASS_NAME[`medley${GTM_MEDLERY_KEY}`]}>{medleyCard.sticker}</St.ContentTag>
          <St.ContentTitle className={GTM_CLASS_NAME[`medley${GTM_MEDLERY_KEY}`]}>
            {medleyCard.coverTitle}
          </St.ContentTitle>
        </St.MedleyCard>
      </St.Container>
      {isModalOpen && <MedleyPreview closeHandler={toggleModal} medleyCard={medleyCard} />}
    </>
  );
}
