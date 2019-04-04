import { ADD_CARD, ADD_DECK, GET_DECKS, REMOVE_DECK } from "../actions/decks";
import * as _ from "lodash";

export const decks = (state = null, action) => {
  switch (action.type) {
    case GET_DECKS:
      return action.decks;
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case REMOVE_DECK:
      return _.omit(state, [_.camelCase(action.deck.title)]);
    case ADD_CARD:
      const { answer, deck, question, decks } = action.card;
      const updatedDeck = {
        ...deck,
        questions: [...deck.questions, ...[{ question, answer }]]
      };
      return {
        ...decks,
        [_.camelCase(deck.title)]: updatedDeck
      };
    default:
      return state;
  }
};
