import { newBannerType } from "../../../../util/main/banner";
import * as St from "./style";
const DATE_FORMAT = {
  START: 2,
  END: 10,
};

const CARDS_LIMIT = {
  START: 0,
  END: 4,
};

export default function SlideContent(props: newBannerType) {
  const { isLast, date, isLightMode, cards, linkTo } = props;

  if (isLast) {
    return <St.LinkTo href={linkTo}>추가하러가기</St.LinkTo>;
  }

  return (
    <St.SlideContent>
      <St.SlideDate>
        <St.DateString islightmode={isLightMode}>
          {date?.replace(/-/g, ".").substring(DATE_FORMAT.START, DATE_FORMAT.END)}
        </St.DateString>
        <St.NewBadge>New</St.NewBadge>
      </St.SlideDate>

      {cards?.slice(CARDS_LIMIT.START, CARDS_LIMIT.END).map((card) => (
        <St.SlideCard key={card._id} islightmode={isLightMode}>
          {card.content}
        </St.SlideCard>
      ))}
      <St.LinkScope href={linkTo} />
    </St.SlideContent>
  );
}
