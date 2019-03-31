import { FlatList } from "react-native";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import DeckButton from "../components/DeckButton";
import { Button } from "react-native";
import { withNavigation } from "react-navigation";

class DeckList extends Component {
  renderItem = ({ item }) => <DeckButton deck={item} />;

  render() {
    const { decks } = this.props;
    return (
      <Fragment>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={item => item.title.toLowerCase()}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate("AddDeck");
          }}
          title="Add new Deck"
          color="#841584"
          accessibilityLabel="Add new quiz deck for you collection"
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: _.values(decks)
  };
};
export default withNavigation(connect(mapStateToProps)(DeckList));
