import { real } from "../core/api/cardCollection";
import { CardsTypeLocation } from "../types/cardCollection";

export default function fetchCardCollection<T>(CARD_TYPE_LOCATION: CardsTypeLocation, handler: (data: T) => void) {
  switch (CARD_TYPE_LOCATION.type) {
    case "category":
      (async () => {
        const { data } = await real.fetchCardsWithCategory<{ data: { cardList: T } }>(CARD_TYPE_LOCATION.categoryId);
        handler(data.cardList);
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
  }
}
