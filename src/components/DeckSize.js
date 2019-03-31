import { Title } from "../styles/Title";
import React from "react";

export const DeckSize = ({ deck, style }) => {
  const deckSize = deck.questions.length;
  switch (deckSize) {
    case 0:
      return <Title style={{ ...style }}>No cards</Title>;
    case 1:
      return <Title style={{ ...style }}>1 Card</Title>;
    default:
      return <Title style={{ ...style }}>{deckSize} Cards</Title>;
  }
};
