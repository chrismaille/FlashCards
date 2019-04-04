import React, { Component } from "react";
import { Title } from "../styles/Title";
import * as _ from "lodash";
import { connect } from "react-redux";

class DeckSize extends Component {
  render() {
    const { deckSize, style } = this.props;
    switch (deckSize) {
      case 0:
        return <Title style={{ ...style }}>No cards</Title>;
      case 1:
        return <Title style={{ ...style }}>1 Card</Title>;
      default:
        return <Title style={{ ...style }}>{deckSize} Cards</Title>;
    }
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  return {
    ...ownProps,
    deckSize: decks[_.camelCase(ownProps.deck.title)].questions.length
  };
};

export default connect(mapStateToProps)(DeckSize);
