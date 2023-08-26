import { atom, DefaultValue } from "recoil";

enum StateType {
  RESPONDED_CARDS = "respondedCards",
}

export const respondedCardsState = atom<string[]>({
  key: StateType.RESPONDED_CARDS,
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const savedValue = localStorage.getItem(StateType.RESPONDED_CARDS);

      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
          localStorage.removeItem(StateType.RESPONDED_CARDS);
        } else {
          localStorage.setItem(StateType.RESPONDED_CARDS, JSON.stringify(newValue));
        }
      });
    },
  ],
});
