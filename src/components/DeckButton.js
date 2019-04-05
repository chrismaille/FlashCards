import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { DeckTitle } from "./DeckTitle";
import DeckSize from "./DeckSize";
// noinspection ES6CheckImport
import Swipeout from "react-native-swipeout";
import { Frame } from "../styles/Frame";
import { connect } from "react-redux";
import { handleRemoveDeck } from "../actions/decks";
import * as _ from "lodash";

class DeckButton extends Component {
  onHandleDelete = () => {
    const { dispatch, deck, decks } = this.props;
    dispatch(handleRemoveDeck(decks, deck));
  };

  render() {
    const swipeOutButtons = [
      {
        text: "Delete",
        onPress: this.onHandleDelete,
        type: "delete",
        autoClose: true
      }
    ];
    const { deck, navigation } = this.props;
    return (
      <Swipeout right={swipeOutButtons}>
        <Frame
          onPress={() =>
            navigation.navigate("Deck", {
              deckKey: _.camelCase(deck.title),
              deckTitle: deck.title
            })
          }
        >
          <DeckTitle deck={deck} />
          <DeckSize deck={deck} />
        </Frame>
      </Swipeout>
    );
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  return {
    decks,
    ...ownProps
  };
};

export default withNavigation(connect(mapStateToProps)(DeckButton));
