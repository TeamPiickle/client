import { atom } from "recoil";

enum StateType {
  RESPONDED_CARDS = "respondedCards",
}

export const respondedCardsState = atom<string[]>({
  key: StateType.RESPONDED_CARDS,
  default: [],
});
