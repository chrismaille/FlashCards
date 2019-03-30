import { GET_DECKS } from "../actions/decks";

export const decks = (state = null, action) => {
  switch (action.type) {
    case GET_DECKS:
      return action.decks;
    default:
      return state;
  }
};
