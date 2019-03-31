import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { appStyles } from "../styles";
import { Question } from "../styles/Question";
import { Answer } from "../styles/Answer";
import Button from "apsl-react-native-button";

class AddDeck extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={appStyles.container}>
        <Question>What is the Title of your new deck?</Question>
        <Answer placeholder={"Enter deck title"} autoFocus={true} />
        <Button style={appStyles.submitBtn} textStyle={{ fontSize: 18 }}>
          Submit
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

export default AddDeck;
