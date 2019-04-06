import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { appStyles } from "../styles";
import { Question } from "../styles/Question";
import { Answer } from "../styles/Answer";
import { AppButton } from "../styles/AppButton";
import { connect } from "react-redux";
import { handleSaveDeck } from "../actions/decks";
import { withNavigation } from "react-navigation";
import * as _ from "lodash";

class AddDeck extends React.Component {
  state = {
    value: ""
  };

  onHandleSubmit = async () => {
    const { decks, dispatch, navigation } = this.props;
    const { value } = this.state;
    await dispatch(handleSaveDeck(decks, { title: value }));
    navigation.navigate("Deck", {
      deckKey: _.camelCase(value),
      deckTitle: value,
      onGoBack: () => this.refresh()
    });
  };

  canSubmit = () => {
    const { decks } = this.props;
    return (
      this.state.value !== "" &&
      !Object.keys(decks).includes(_.camelCase(this.state.value))
    );
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={appStyles.container}>
        <Question>What is the Title of your new deck?</Question>
        <Answer
          placeholder={"Enter deck title"}
          autoFocus={true}
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <AppButton
          isDisabled={!this.canSubmit()}
          onPress={this.onHandleSubmit}
          style={appStyles.submitBtn}
        >
          Submit
        </AppButton>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};
export default withNavigation(connect(mapStateToProps)(AddDeck));
