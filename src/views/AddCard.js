import { KeyboardAvoidingView } from "react-native";
import { appStyles } from "../styles";
import { Question } from "../styles/Question";
import { Answer } from "../styles/Answer";
import React from "react";
import { Card } from "../styles/Card";
import { AppButton } from "../styles/AppButton";

class AddCard extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={appStyles.container}>
        <Card>
          <Question>Question:</Question>
          <Answer
            placeholder={"Enter the question for card"}
            autoFocus={true}
          />
          <Question>Answer:</Question>
          <Answer placeholder={"Enter question's answer"} />
          <AppButton style={appStyles.submitBtn}>Submit</AppButton>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;
