import { AsyncStorage } from "react-native";
import defaultData from "./InitialData.json";

export const DECKS_STORAGE_KEY = "FlashCards:decks";

export const getInitialData = async () => {
  const storageData = await AsyncStorage.getItem(DECKS_STORAGE_KEY, null).then(
    data => JSON.parse(data)
  );
  if (!storageData) {
    console.log("Storage not found. Using default data...");
    return defaultData;
  }
  return storageData;
};
