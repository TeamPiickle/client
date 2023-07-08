import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useNavigateCardCollection, { NavigateCardCollectionBestType } from "../hooks/useNavigateCardCollection";
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
}

export default function BestPiickleCard(props: BestPiickleCardProps) {
  const { bestPiickle, idx, canNavigate, isLast, locationType } = props;
  const { content, tags } = bestPiickle;
  const GTM_IDX_KEY = `mainBestPiickle${idx + 1}`;

  const navigateCardCollection = useNavigateCardCollection(locationType) as NavigateCardCollectionBestType;

  const onClickCard = () => {
    if (!canNavigate) return;
    navigateCardCollection(idx);
  };

  return (
    <St.Container type="button" className={GTM_CLASS_NAME[GTM_IDX_KEY]} onClick={onClickCard}>
      {isLast ? (
        <St.BestPiickleCard className={GTM_CLASS_NAME[GTM_IDX_KEY]}>
          <St.TagsWrapper className={GTM_CLASS_NAME[GTM_IDX_KEY]}>
            {tags.map((tag: string, i: number) => {
              return <St.Tag key={i}>{tag.slice(1)}</St.Tag>;
            })}
          </St.TagsWrapper>
          <St.Content className={GTM_CLASS_NAME[GTM_IDX_KEY]}>{content}</St.Content>
          <St.PickButtonWrapper className={GTM_CLASS_NAME[GTM_IDX_KEY]}>카드 보기</St.PickButtonWrapper>
        </St.BestPiickleCard>
      ) : (
        <St.LastCard>
          <St.Content>
            나머지 주제들도
            <br />
            보고 싶다면?
          </St.Content>
          <St.LastCardWrapper>나머지 보기</St.LastCardWrapper>
        </St.LastCard>
      )}
    </St.Container>
  );
}
