import { real } from "../core/api/cardCollection";
import { CardsTypeLocation } from "../types/cardCollection";

export default function fetchCardCollection<T>(CARD_TYPE_LOCATION: CardsTypeLocation, handler: (data: T) => void) {
  switch (CARD_TYPE_LOCATION.type) {
    case "category":
      (async () => {
        const { data } = await real.fetchCardsWithCategory<{ data: T }>(CARD_TYPE_LOCATION.categoryId);
        handler(data);
      })();
      break;

    case "best":
      (async () => {
        const { data } = await real.fetchCardsWithBest<{ data: T }>();
        handler(data);
      })();
      break;

    case "all":
      (async () => {
        const { data } = await real.fetchCardsWithFilter<{ data: T }>([]);
        handler(data);
      })();
      break;

    case "filter":
      (async () => {
        const { data } = await real.fetchCardsWithFilter(CARD_TYPE_LOCATION.filters);
        handler(data);
      })();
      break;
    default:
      throw new Error("잘못된 접근입니다.");
  }
}
