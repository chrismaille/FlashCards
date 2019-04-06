import { QuizIcon } from "./QuizIcon";
import { View } from "react-native";
import { Answer, Question } from "../styles/Question";
import { QuizAnswer } from "./QuizResult";
import { CorrectButton, IncorrectButton } from "./QuizButtons";
import { AppButton } from "../styles/AppButton";
import React, { Fragment } from "react";
import { appStyles } from "../styles";

export const QuizProgress = props => {
  const {
    current,
    total,
    question,
    answer,
    showAnswer,
    onPressShowAnswer,
    onPressCorrect,
    onPressIncorrect
  } = props;
  return (
    <Fragment>
      <QuizIcon current={current} total={total} />
      <View style={appStyles.centerHorizontally}>
        <Question>{question}</Question>
        {showAnswer ? (
          <QuizAnswer>
            <Answer>{answer}</Answer>
            <CorrectButton onPress={onPressCorrect} />
            <IncorrectButton onPress={onPressIncorrect} />
          </QuizAnswer>
        ) : (
          <View style={appStyles.buttonFrame}>
            <AppButton
              style={{ backgroundColor: "lightblue" }}
              onPress={() => onPressShowAnswer()}
            >
              Show Answer
            </AppButton>
          </View>
        )}
      </View>
    </Fragment>
  );
};
