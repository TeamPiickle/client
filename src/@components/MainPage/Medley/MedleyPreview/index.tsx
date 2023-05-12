import { LocationType } from "../../../../types/cardCollection";
import { MedleyCard } from "../../../../types/main";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import HeadlessCTAButton from "../../../@common/CTABtn/HeadlessCTAButton";
import useNavigateCardCollection, {
  NavigateCardCollectionMedleyType,
} from "../../../@common/hooks/useNavigateCardCollection";
import Modal from "../../../@common/Modal";
import St from "./style";

interface MedleyPreviewProps {
  closeHandler: () => void;
  medleyCard: MedleyCard;
}

export default function MedleyPreview(props: MedleyPreviewProps) {
  const { closeHandler, medleyCard } = props;
  const navigateCardCollection = useNavigateCardCollection(LocationType.MEDLEY) as NavigateCardCollectionMedleyType;
  const GTM_MEDLERY_KEY = medleyCard.sticker.slice(0, 2);

  return (
    <Modal
      theme="GRAY_BOTTOM"
      closeOpacityClassName={GTM_CLASS_NAME[`medleyPreviewClose${GTM_MEDLERY_KEY}`]}
      closeBtnClassName={GTM_CLASS_NAME[`medleyPreviewClose${GTM_MEDLERY_KEY}`]}
      closeHandler={closeHandler}>
      <St.Container>
        <St.MedleyPreview>
          <St.Tag>{medleyCard.sticker}</St.Tag>
          <St.Title>{medleyCard.title}</St.Title>
          <St.Description>{medleyCard.description}</St.Description>
          <St.PreviewCards>
            {medleyCard.previewCards.map((_, i: number) => (
              <St.CardWrapper key={i}>{medleyCard.previewCards[i].content}</St.CardWrapper>
            ))}
          </St.PreviewCards>
          <HeadlessCTAButton
            className={GTM_CLASS_NAME[`medleyPreview${GTM_MEDLERY_KEY}`]}
            onClick={() => navigateCardCollection(medleyCard._id)}>
            카드 보기
          </HeadlessCTAButton>
        </St.MedleyPreview>
      </St.Container>
    </Modal>
  );
}
