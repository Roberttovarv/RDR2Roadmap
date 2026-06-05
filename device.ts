import * as Localization from 'expo-localization';
import { useSyncExternalStore } from 'react';

export const DeviceLangTag = Localization.getLocales()[0]?.languageTag.split("-")[0]


const handleLang = (lang: string) => {
    if (lang === "es") return lang
    return "en"
}

export type AppLanguage = "es" | "en";

let currentLang: AppLanguage = handleLang(DeviceLangTag) as AppLanguage;
const listeners = new Set<() => void>();

export let LANG: AppLanguage = currentLang;

export const getLanguage = (): AppLanguage => currentLang;

export const setLanguage = (lang: AppLanguage) => {
    const normalized = handleLang(lang) as AppLanguage;
    if (normalized === currentLang) return;

    currentLang = normalized;
    LANG = normalized;
    listeners.forEach((listener) => listener());
}

const subscribeLanguage = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export const useLanguage = () => {
    return useSyncExternalStore(subscribeLanguage, getLanguage, getLanguage);
}
