import styled from "styled-components/native/dist/styled-components.native.esm";
import PercentageCircle from "react-native-percentage-circle";
import { Text } from "react-native";
import React from "react";

const ProgressView = styled.View`
  align-items: center;
  padding: 20px;
  height: 60px;
  margin-top: 48px;
  margin-bottom: 24px;
`;
export const QuizIcon = ({ current, total }) => (
  <ProgressView>
    <PercentageCircle
      radius={35}
      percent={(current / total) * 100}
      color={"#3498db"}
      innerColor={"orange"}
      borderWidth={2}
      disabled={false}
      textStyle={{}}
    >
      <Text>
        {current}/{total}
      </Text>
    </PercentageCircle>
  </ProgressView>
);
