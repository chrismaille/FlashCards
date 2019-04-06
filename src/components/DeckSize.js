import React, { Component } from "react";
import { Title } from "../styles/Title";
import * as _ from "lodash";
import { connect } from "react-redux";

class DeckSize extends Component {
  render() {
    const { deckSize, style } = this.props;
    return (
      <Title style={style}>
        {deckSize === 0 && "No Cards"}
        {deckSize === 1 && "1 Cards"}
        {deckSize > 1 && `${deckSize} Cards`}
      </Title>
    );
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  return {
    ...ownProps,
    deckSize: decks[_.camelCase(ownProps.deck.title)].questions.length
  };
};

export default connect(mapStateToProps)(DeckSize);
