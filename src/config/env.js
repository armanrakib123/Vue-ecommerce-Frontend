export const env = {
  APP_TITLE: import.meta.env.VITE_APP_TITLE || 'Nexora Commerce',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.nexoracommerce.io/v1',
  ENABLE_MOCK_API: import.meta.env.VITE_ENABLE_MOCK_API !== 'false',
  MOCK_DELAY_MS: Number(import.meta.env.VITE_MOCK_API_DELAY_MS) || 150,
  WS_BASE_URL: import.meta.env.VITE_WS_BASE_URL || 'wss://ws.nexoracommerce.io',
  IS_PROD: import.meta.env.PROD,
  IS_DEV: import.meta.env.DEV,
}
