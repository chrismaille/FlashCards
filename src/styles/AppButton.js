import Button from "apsl-react-native-button";
import React from "react";

export const AppButton = props => {
  const { style, ...rest } = props;
  return <Button style={[{ border: 0 }, { ...style }]} {...rest} />;
};
