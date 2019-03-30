import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./src/middleware";
import { reducer } from "./src/reducers";
import { Provider } from "react-redux";
import Home from "./src/views/Home";

const store = createStore(reducer, composeWithDevTools(middleware));

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "My Decks",
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  },
  { initialRouteName: "Home" }
);

const AppNavigator = createAppContainer(Navigator);

// noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}





