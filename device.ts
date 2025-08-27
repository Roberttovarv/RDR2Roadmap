import * as Localization from 'expo-localization';

export const DEVICE_LANGUAGE: string = "es"

type Lang = "es" | "en";
export const LANG = (DEVICE_LANGUAGE as Lang) ?? "en";
