import * as Localization from 'expo-localization';

export const DeviceLangTag = Localization.getLocales()[0]?.languageTag.split("-")[0]


const handleLang = (lang: string) => {
    if (lang === "es") return lang
    return "en"
}
export const LANG = handleLang(DeviceLangTag)
