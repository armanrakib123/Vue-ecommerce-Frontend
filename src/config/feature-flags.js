export const featureFlags = {
  reviews: import.meta.env.VITE_FEATURE_REVIEWS !== 'false',
  loyalty: import.meta.env.VITE_FEATURE_LOYALTY !== 'false',
  liveChat: import.meta.env.VITE_FEATURE_LIVE_CHAT !== 'false',
  analyticsExport: import.meta.env.VITE_FEATURE_ANALYTICS_EXPORT !== 'false',
  guestCheckout: true,
  socialAuth: true,
  darkTheme: true,
  multiCurrency: true,
}
