import { KeyboardAvoidingView } from "react-native";
import { appStyles } from "../styles";
import { Question } from "../styles/Question";
import { Answer } from "../styles/Answer";
import React from "react";
import { Card } from "../styles/Card";
import Button from "apsl-react-native-button";

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
          <Button style={appStyles.submitBtn} textStyle={{ fontSize: 18 }}>
            Submit
          </Button>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;
