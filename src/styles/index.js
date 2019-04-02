import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffecb3",
    alignItems: "stretch",
    justifyContent: "center"
  },
  cardLegend: {
    textAlign: "center",
    color: "white",
    fontSize: 14
  },
  largeIcon: {
    textAlign: "center",
    color: "white",
    fontSize: 120
  },
  submitBtn: {
    backgroundColor: "#5bb0f4",
    margin: 18
  }
});

export const defaultNavOptions = {
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
