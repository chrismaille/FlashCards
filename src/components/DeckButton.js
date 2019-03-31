import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { DeckTitle } from "./DeckTitle";
import { DeckSize } from "./DeckSize";
import { Frame } from "../styles/Frame";

class DeckButton extends Component {
  render() {
    const { deck, navigation } = this.props;
    return (
      <Frame onPress={() => navigation.navigate("Deck", { deck })}>
        <DeckTitle deck={deck} />
        <DeckSize deck={deck} />
      </Frame>
    );
  }
}

export default withNavigation(DeckButton);
