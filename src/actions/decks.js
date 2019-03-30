export const GET_DECKS = "GET_DECKS";

export const getDecks = (decks) => {
  return {
    decks,
    type: GET_DECKS
  }
};
