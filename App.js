import React from "react";
import { Provider } from "react-redux";
import { setLocalNotification } from "./src/notifications";
import { Navigator } from "./src/routes/Navigator";
import { store } from "./src/store";

// noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  componentDidMount() {
    // noinspection JSIgnoredPromiseFromCall
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
