import { LocationType } from "../../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useNavigateCardCollection, {
  NavigateCardCollectionBestType,
} from "../../../@common/hooks/useNavigateCardCollection";
import St from "./style";

interface BestPiickleCardProps {
  bestPiickle: {
    _id: string;
    tags: string[];
    content: string;
  };
  idx: number;
  canNavigate: boolean;
}

export default function BestPiickleCard(props: BestPiickleCardProps) {
  const { bestPiickle, idx, canNavigate } = props;
  const { content, tags } = bestPiickle;
  const GTM_IDX_KEY = `mainBestPiickle${idx + 1}`;

  const navigateCardCollection = useNavigateCardCollection(LocationType.BEST) as NavigateCardCollectionBestType;

  return (
    <St.Container
      type="button"
      className={GTM_CLASS_NAME[GTM_IDX_KEY]}
      onClick={() => {
        if (!canNavigate) return;
        navigateCardCollection(idx);
      }}>
      <St.BestPiickleCard>
        <St.TagsWrapper>
          {tags.map((tag: string, i: number) => {
            return <St.Tag key={i}>{tag.slice(1)}</St.Tag>;
          })}
        </St.TagsWrapper>
        <St.Content>{content}</St.Content>
        <St.PickButtonWrapper>카드 보기</St.PickButtonWrapper>
      </St.BestPiickleCard>
    </St.Container>
  );
}
