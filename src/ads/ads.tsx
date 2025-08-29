import MobileAds, {
  AdsConsent,
  AdsConsentStatus,
  MaxAdContentRating,
  RequestConfiguration,
} from "react-native-google-mobile-ads";

export const initAdsWithConsent = async () => {
  const info = await AdsConsent.requestInfoUpdate();

  if (info.isConsentFormAvailable) await AdsConsent.loadAndShowConsentFormIfRequired()

    const {status } = await AdsConsent.getConsentInfo()

    const requestNonPersonalizedAdsOnly = status !== AdsConsentStatus.OBTAINED 

    const config: RequestConfiguration = {
        maxAdContentRating: MaxAdContentRating.T,
        tagForChildDirectedTreatment: false,
        tagForUnderAgeOfConsent: false,
        testDeviceIdentifiers: __DEV__ ? ["EMULATOR"] : []
    }

    await MobileAds().setRequestConfiguration(config)

    await MobileAds().initialize()

    return {requestNonPersonalizedAdsOnly, consentStatus: status}
};
