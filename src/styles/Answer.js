import React from "react";
import { AppInput } from "./AppInput";

export class Answer extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <AppInput
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        {...this.props}
      />
    );
  }
}
