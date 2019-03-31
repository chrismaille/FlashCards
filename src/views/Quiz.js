import React from "react";
import { Card } from "../styles/Card";
import PercentageCircle from "react-native-percentage-circle";
import { Text, View } from "react-native";
import { Question } from "../styles/Question";
import { connect } from "react-redux";

class Quiz extends React.Component {
  state = {
    index: 0,
    showAnswer: false
  };

  render() {
    const { deck } = this.props;
    const { index } = this.state;
    const allQuestions = deck.questions.length;
    const currentQuestion = index + 1;
    return (
      <Card>
        <View>
          <PercentageCircle
            radius={35}
            percent={(currentQuestion / allQuestions) * 100}
            color={"#3498db"}
            innerColor={"orange"}
            borderWidth={2}
            disabled={false}
            textStyle={{}}
          >
            <Text>
              {currentQuestion}/{allQuestions}
            </Text>
          </PercentageCircle>
        </View>
        <View>
          <Question>{deck.questions[index].question}</Question>
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
