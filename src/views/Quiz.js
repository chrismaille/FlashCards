import React from "react";
import { Card } from "../styles/Card";
import { View } from "react-native";
import { Answer, Question } from "../styles/Question";
import { connect } from "react-redux";
import { QuizProgress } from "../components/QuizProgress";
import styled from "styled-components/native";
import { AppButton } from "../styles/AppButton";

const QuizAnswer = styled.View`
  flex: 1;
  height: auto;
  padding: 12px;
`;

class Quiz extends React.Component {
  state = {
    index: 0,
    showAnswer: false
  };

  render() {
    const { deck } = this.props;
    const { index, showAnswer } = this.state;
    const allQuestions = deck.questions.length;
    const currentQuestion = index + 1;
    return (
      <Card>
        <QuizProgress current={currentQuestion} total={allQuestions} />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Question>{deck.questions[index].question}</Question>
          {showAnswer ? (
            <QuizAnswer>
              <Answer>{deck.questions[index].answer}</Answer>
              <AppButton
                style={{ backgroundColor: "lightgreen" }}
                onPress={() => {}}
              >
                Correct!
              </AppButton>
              <AppButton style={{ backgroundColor: "red" }} onPress={() => {}}>
                Incorrect!
              </AppButton>
            </QuizAnswer>
          ) : (
            <View
              style={{
                flex: 1,
                padding: 8,
                justifyContent: "center",
                width: "100%"
              }}
            >
              <AppButton
                style={{ backgroundColor: "lightblue" }}
                onPress={() => {
                  this.setState({ showAnswer: true });
                }}
              >
                Show Answer
              </AppButton>
            </View>
          )}
        </View>
      </Card>
    );
  }
}
const mapStateToProps = ({}, ownProps) => {
  return {
    deck: ownProps.navigation.getParam("deck")
  };
};
export default connect(mapStateToProps)(Quiz);
