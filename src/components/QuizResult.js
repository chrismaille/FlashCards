import { Card } from "../styles/Card";
import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

export const QuizAnswer = styled.View`
  flex: 1;
  height: auto;
  width: 100%;
  padding: 12px;
`;

const QuizResult = props => {
  const { score } = props;
  console.log(props);
  return (
    <Card>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>You hit {score} Questions.</Text>
      </View>
    </Card>
  );
};

export default QuizResult;
