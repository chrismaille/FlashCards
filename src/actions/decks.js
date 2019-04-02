import { getInitialData, SaveStorage } from "../storage/Storage";
import _ from "lodash";

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const REMOVE_DECK = "REMOVE_DECK";

export const getDecks = decks => {
  return {
    decks,
    type: GET_DECKS
  };
};

export const addDeck = deck => {
  return {
    deck,
    type: ADD_DECK
  };
};

export const removeDeck = deck => {
  return {
    deck,
    type: REMOVE_DECK
  };
};

export const handleInitialData = () => dispatch => {
  return getInitialData().then(decks => dispatch(getDecks(decks)));
};

export const handleSaveDeck = (decks, { title }) => dispatch => {
  const newDeck = {
    [_.camelCase(title)]: {
      title,
      questions: []
    }
  };
  return SaveStorage({ ...decks, ...newDeck }).then(() =>
    dispatch(addDeck(newDeck))
  );
};

export const handleRemoveDeck = (decks, deck) => dispatch => {
  dispatch(removeDeck(deck));
  const newDeck = decks;
  delete newDeck[_.camelCase(deck.title)];
  return SaveStorage(newDeck);
};
