import { LocationType } from "../../../types/cardCollection";
import useNavigateCardCollection, { NavigateRecentCollectionType } from "../hooks/useNavigateCardCollection";
import LastBestPiickleCard from "./LastBestPiickleCard";
import * as St from "./style";

interface BestPiickleCardProps {
  bestPiickle: {
    _id: string;
    tags: string[];
    content: string;
  };
  idx: number;
  canNavigate: boolean;
  isLast?: boolean;
  locationType: LocationType;
  gtmClassName?: string;
}

export default function BestPiickleCard(props: BestPiickleCardProps) {
  const { bestPiickle, idx, canNavigate, isLast, locationType, gtmClassName } = props;
  const { content, tags } = bestPiickle;

  const navigateCardCollection = useNavigateCardCollection(locationType) as NavigateRecentCollectionType;

  const handleClickCard = () => {
    if (!canNavigate) return;
    navigateCardCollection(idx);
  };

  return (
    <St.Container type="button" className={gtmClassName}>
      {!isLast ? (
        <St.BestPiickleCard className={gtmClassName} onClick={handleClickCard}>
          <St.TagsWrapper className={gtmClassName}>
            {tags.map((tag: string, i: number) => {
              return <St.Tag key={i}>{tag.slice(1)}</St.Tag>;
            })}
          </St.TagsWrapper>
          <St.Content className={gtmClassName}>{content}</St.Content>
          <St.PickButtonWrapper className={gtmClassName}>카드 보기</St.PickButtonWrapper>
        </St.BestPiickleCard>
      ) : (
        <LastBestPiickleCard handleClickCard={handleClickCard} gtmClassName={gtmClassName} />
      )}
    </St.Container>
  );
}
