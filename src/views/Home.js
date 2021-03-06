import { AppLoading, SplashScreen } from "expo";
import { View } from "react-native";
import React from "react";
import DeckList from "./DeckList";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/decks";
import { appStyles } from "../styles";

class Home extends React.Component {
  state = {
    isLoading: true
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(handleInitialData());
    this.setState({ isLoading: false }, () => SplashScreen.hide());
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={appStyles.container}>
        {isLoading ? <AppLoading autoHideSplash={false} /> : <DeckList />}
      </View>
    );
  }
}

export default connect()(Home);
