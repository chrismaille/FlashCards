import React, { Component } from "react";
import DeckCover from "../components/DeckCover";
import { appStyles } from "../styles";
import { View } from "react-native";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam("deck");
    return { title: deck.title };
  };

  render() {
    const deck = this.props.navigation.getParam("deck");
    return (
      <View style={appStyles.container}>
        <DeckCover deck={deck} />
      </View>
    );
  }
}

export default DeckDetail;
