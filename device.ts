import * as Localization from 'expo-localization';

export const DEVICE_LANGUAGE: string = (Localization as any).locale.split('-')[0];
