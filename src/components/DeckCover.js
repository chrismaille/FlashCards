import React from "react";
import { Button, View } from "react-native";
import { DeckTitle } from "./DeckTitle";
import { DeckLogo } from "./DeckLogo";
import { DeckSize } from "./DeckSize";
import { Card } from "../styles/Card";
import { withNavigation } from "react-navigation";

class DeckCover extends React.Component {
  onPressNewCard = e => {
    e.preventDefault();
    this.props.navigation.navigate("AddCard");
  };

  onPressQuiz = e => {
    e.preventDefault();
    const { deck } = this.props;
    this.props.navigation.navigate("Quiz", { deck });
  };

  render() {
    const { deck } = this.props;
    return (
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
    );
  }
}

export default withNavigation(DeckCover);
