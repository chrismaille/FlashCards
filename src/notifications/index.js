import { Notifications, Permissions } from "expo";
import { AsyncStorage } from "react-native";

const NOTIFICATION_KEY = "FlashCards:notifications";

export const clearLocalNotification = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY);
    Notifications.cancelAllScheduledNotificationsAsync();
  } catch (e) {
    console.log("Error during cancel notification", e);
  }
};

export const createNotification = () => ({
  title: "Try a Quiz!",
  body: "👋 don't forget to Quiz Deck for today!",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: "high",
    sticky: false,
    vibrate: true
  }
});

export const setLocalNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const notificationSet = JSON.parse(data);
  if (notificationSet === null) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);
      try {
        await Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time: tomorrow,
            repeat: "day"
          }
        );
        console.log("New Notification date:", tomorrow);
        await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
      } catch (e) {
        console.log("Error during add notification: ", e);
      }
    }
  }
};
