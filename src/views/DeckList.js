import { FlatList, View } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../Styles";
import _ from "lodash";
import Deck from "../components/Deck";

class DeckList extends Component {
  renderItem = ({ item }) => (
    <Deck key={item.title.toLowerCase()} deck={item}/>
  );

  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderItem}/>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: _.values(decks)
  };
};
export default connect(mapStateToProps)(DeckList);
