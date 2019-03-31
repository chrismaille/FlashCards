import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./src/middleware";
import { reducer } from "./src/reducers";
import { Provider } from "react-redux";
import Home from "./src/views/Home";
import DeckDetail from "./src/views/DeckDetail";
import { defaultNavOptions } from "./src/styles";
import AddDeck from "./src/views/AddDeck";
import AddCard from "./src/views/AddCard";
import Quiz from "./src/views/Quiz";

const store = createStore(reducer, composeWithDevTools(middleware));

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { title: "My Decks", ...defaultNavOptions }
    },
    Deck: {
      screen: DeckDetail,
      navigationOptions: defaultNavOptions
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        title: "Add new Deck",
        ...defaultNavOptions
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: "Add new Card",
        ...defaultNavOptions
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: "Quiz",
        ...defaultNavOptions
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
        <AppNavigator />
      </Provider>
    );
  }
}
