import React from "react";
import { Title } from "../styles/Title";

export const DeckTitle = ({ deck, style }) => (
  <Title style={[{ fontSize: 24 }, { ...style }]}>{deck.title}</Title>
);
