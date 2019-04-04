import { AsyncStorage } from "react-native";
import defaultData from "./InitialData.json";

export const DECKS_STORAGE_KEY = "FlashCards:allDecks";

export const getInitialData = async () => {
  const storageData = await AsyncStorage.getItem(DECKS_STORAGE_KEY, null).then(
    data => JSON.parse(data)
  );
  if (!storageData) {
    console.log("Storage not found. Using default data...");
    await SaveStorage(defaultData);
    return defaultData;
  }
  console.log("Using data saved in Store");
  console.log(storageData);
  return storageData;
};

export const SaveStorage = async currentData => {
  console.log("New storage:", currentData);
  return await AsyncStorage.setItem(
    DECKS_STORAGE_KEY,
    JSON.stringify(currentData)
  );
};
