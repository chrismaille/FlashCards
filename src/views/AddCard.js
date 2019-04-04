import { KeyboardAvoidingView } from "react-native";
import { appStyles } from "../styles";
import { Question } from "../styles/Question";
import { Answer } from "../styles/Answer";
import React from "react";
import { Card } from "../styles/Card";
import { AppButton } from "../styles/AppButton";
import { handleSaveCard } from "../actions/decks";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class AddCard extends React.Component {
  state = {
    decks: null,
    deck: null,
    question: "",
    answer: ""
  };

  canSubmit = () => {
    return this.state.question !== "" && this.state.answer !== "";
  };

  onHandleSubmit = () => {
    const { dispatch, navigation } = this.props;
    dispatch(handleSaveCard(this.state)).then(() => navigation.goBack());
  };

  componentDidMount() {
    const { deck, decks } = this.props;
    this.setState({ deck, decks });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={appStyles.container}>
        <Card>
          <Question>Question:</Question>
          <Answer
            placeholder={"Enter the question for card"}
            autoFocus={true}
            value={this.state.question}
            onChangeText={question => this.setState({ question })}
          />
          <Question>Answer:</Question>
          <Answer
            placeholder={"Enter question's answer"}
            value={this.state.answer}
            onChangeText={answer => this.setState({ answer })}
          />
          <AppButton
            isDisabled={!this.canSubmit()}
            onPress={this.onHandleSubmit}
            style={appStyles.submitBtn}
          >
            Submit
          </AppButton>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ decks }, ownProps) => {
  return {
    decks,
    deck: ownProps.navigation.getParam("deck")
  };
};

export default withNavigation(connect(mapStateToProps)(AddCard));
