import React from "react";
import { AppInput } from "./AppInput";

export class Answer extends React.Component {
  render() {
    return <AppInput {...this.props} />;
  }
}
