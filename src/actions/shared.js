import { getInitialData } from "../storage/Storage";
import { getDecks } from "./decks";

export const handleInitialData = () => (dispatch) => {
  return getInitialData().then(decks => dispatch(getDecks(decks)))
};


