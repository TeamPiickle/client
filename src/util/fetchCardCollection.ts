import { bookmarkApi } from "../core/api/bookmark";
import { cardCollectionApi } from "../core/api/cardCollection";
import { CardsTypeLocation, LocationType } from "../types/cardCollection";

export default function fetchCardCollection<T>(CARD_TYPE_LOCATION: CardsTypeLocation, handler: (data: T) => void) {
  switch (CARD_TYPE_LOCATION.type) {
    case LocationType.CATEGORY:
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithCategory<{ data: { cardList: T } }>(
          CARD_TYPE_LOCATION.categoryId,
        );
        handler(data.cardList);
      })();
      break;

    case LocationType.BEST:
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithBest<{ data: T }>();
        handler(data);
      })();
      break;

    case LocationType.ALL:
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithFilter<{ data: T }>([]);
        handler(data);
      })();
      break;

    case LocationType.BOOKMARK:
      (async () => {
        const { data } = await bookmarkApi.fetchCardsWithBookmarks<{ data: T }>();
        handler(data);
      })();
      break;

    case LocationType.MEDLEY:
      (async () => {
        const { data } = await cardCollectionApi.fetchCardsWithMedley<{ data: { cards: T } }>(
          CARD_TYPE_LOCATION.medleyId,
        );
        handler(data.cards);
      })();
      break;
  }
}
