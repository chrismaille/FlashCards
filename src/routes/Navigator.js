import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../views/Home";
import { defaultNavOptions } from "../styles";
import DeckDetail from "../views/DeckDetail";
import AddDeck from "../views/AddDeck";
import AddCard from "../views/AddCard";
import Quiz from "../views/Quiz";
import QuizResult from "../components/QuizResult";

const Routes = createStackNavigator(
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
    },
    QuizResult: {
      screen: QuizResult,
      navigationOptions: {
        title: "Your Result",
        ...defaultNavOptions
      }
    }
  },
  { initialRouteName: "Home" }
);

export const Navigator = createAppContainer(Routes);
