import { AppButton } from "../styles/AppButton";
import React from "react";

export const CorrectButton = props => (
  <AppButton style={{ backgroundColor: "lightgreen" }} onPress={props.onPress}>
    Correct!
  </AppButton>
);

export const IncorrectButton = props => (
  <AppButton style={{ backgroundColor: "red" }} onPress={props.onPress}>
    Incorrect!
  </AppButton>
);
