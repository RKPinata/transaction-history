// src/utils/storage.ts
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const setIsBiometricEnabled = (enabled: boolean) => {
  storage.set("isBiometricEnabled", enabled);
};

export const getIsBiometricEnabled = (): boolean => {
  return storage.getBoolean("isBiometricEnabled") ?? false;
};
