import { AppLoading, SplashScreen } from "expo";
import { View } from "react-native";
import React from "react";
import DeckList from "./DeckList";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import styles from "../Styles";

class Home extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props
      .dispatch(handleInitialData())
      .then(() =>
        this.setState({ isLoading: false }, () => SplashScreen.hide())
      );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <AppLoading autoHideSplash={false}/> : <DeckList/>}
      </View>
    );
  }
}

export default connect()(Home);
