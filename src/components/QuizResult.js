import React, { Fragment } from "react";
import { Button, View } from "react-native";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appStyles } from "../styles";
import { Title } from "../styles/Title";
import { withNavigation } from "react-navigation";
import { clearLocalNotification, setLocalNotification } from "../notifications";

export const QuizAnswer = styled.View`
  flex: 1;
  height: auto;
  width: 100%;
  padding: 12px;
`;

class QuizResult extends React.Component {
  onPressBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  getScoreText = () => {
    const { score, deck } = this.props;
    if (score === deck.questions.length) {
      return "You hit all questions. Congratulations!!";
    }
    switch (score) {
      case 0:
        return "You did not hit any questions. Try Again!";
      case 1:
        return "You hit 1 Question!";
      default:
        return `You hit ${score} Questions!`;
    }
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { onPressRestart } = this.props;
    return (
      <Fragment>
        <View style={{ flex: 1, alignItems: "center" }}>
          <MaterialCommunityIcons
            style={appStyles.largeIcon}
            name={"speedometer"}
          />
          <Title style={{ fontSize: 24 }}>{this.getScoreText()}</Title>
          <View style={{ flex: 1, marginTop: 18 }}>
            <Button onPress={onPressRestart} title={"Restart Quiz"} />
            <Button onPress={this.onPressBack} title={"Back to Deck"} />
          </View>
        </View>
      </Fragment>
    );
  }
}

export default withNavigation(QuizResult);
