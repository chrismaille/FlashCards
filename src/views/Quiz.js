import React from "react";
import { Card } from "../styles/Card";
import { connect } from "react-redux";
import { QuizProgress } from "../components/QuizProgress";
import QuizResult from "../components/QuizResult";

class Quiz extends React.PureComponent {
  state = {
    index: 0,
    showAnswer: false,
    score: 0,
    quizFinished: false
  };

  handlePressCorrect = () => {
    const { deck } = this.props;
    const newIndex = this.state.index + 1;
    const newScore = this.state.score + 1;
    const allQuestions = deck.questions.length;

    this.setState({
      showAnswer: false,
      index: newIndex,
      score: newScore,
      quizFinished: newIndex === allQuestions
    });
  };

  handlePressIncorrect = () => {
    const { deck } = this.props;
    const newIndex = this.state.index + 1;
    const allQuestions = deck.questions.length;

    this.setState({
      showAnswer: false,
      index: newIndex,
      quizFinished: newIndex === allQuestions
    });
  };

  handlePressShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  handlePressRestart = () => {
    this.setState({
      index: 0,
      showAnswer: false,
      score: 0,
      quizFinished: false
    });
  };

  render() {
    const { deck } = this.props;
    const { index, showAnswer, quizFinished, score } = this.state;
    const allQuestions = deck.questions.length;
    const currentQuestion = index + 1;
    return (
      <Card>
        {quizFinished ? (
          <QuizResult
            score={score}
            deck={deck}
            onPressRestart={this.handlePressRestart}
          />
        ) : (
          <QuizProgress
            question={deck.questions[index].question}
            answer={deck.questions[index].answer}
            current={currentQuestion}
            total={allQuestions}
            showAnswer={showAnswer}
            onPressShowAnswer={this.handlePressShowAnswer}
            onPressCorrect={this.handlePressCorrect}
            onPressIncorrect={this.handlePressIncorrect}
          />
        )}
      </Card>
    );
  }
}

const mapStateToProps = ({}, ownProps) => {
  const deck = ownProps.navigation.getParam("deck");
  return {
    deck
  };
};
export default connect(mapStateToProps)(Quiz);
