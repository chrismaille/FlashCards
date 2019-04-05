import React, { Component } from "react";
import { appStyles } from "../styles";
import { Button, View } from "react-native";
import { Card } from "../styles/Card";
import { DeckLogo } from "../components/DeckLogo";
import { DeckTitle } from "../components/DeckTitle";
import DeckSize from "../components/DeckSize";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class DeckDetail extends Component {
  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("deckTitle");
    return { title };
  };

  onPressNewCard = () => {
    const { deck, navigation } = this.props;
    navigation.navigate("AddCard", { deck: deck });
  };

  onPressQuiz = () => {
    const { deck, navigation } = this.props;
    navigation.navigate("Quiz", { deck: deck });
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={appStyles.container}>
        <Card>
          <View>
            <DeckLogo />
            <DeckTitle style={{ fontSize: 32 }} deck={deck} />
            <DeckSize style={{ fontSize: 24 }} deck={deck} />
          </View>
          <View style={{ marginTop: 18 }}>
            <Button onPress={this.onPressNewCard} title={"Add new Card"} />
            <Button
              disabled={deck.questions.length === 0}
              onPress={this.onPressQuiz}
              title={"Start Quiz"}
            />
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  const key = ownProps.navigation.getParam("deckKey");
  return {
    decks,
    deck: decks[key],
    ...ownProps
  };
};

export default withNavigation(connect(mapStateToProps)(DeckDetail));
