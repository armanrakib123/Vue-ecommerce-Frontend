export const appConfig = {
  name: 'Nexora Commerce',
  version: '1.0.0',
  description: 'Enterprise Scalable Multi-Role Commerce Experience Platform',
  supportEmail: 'support@nexoracommerce.io',
  defaultLocale: 'en',
  supportedLocales: ['en', 'bn'],
  defaultCurrency: 'USD',
  supportedCurrencies: [
    { code: 'USD', symbol: '$', rate: 1.0 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'BDT', symbol: '৳', rate: 118.5 },
  ],
  pagination: {
    defaultPageSize: 12,
    pageSizeOptions: [12, 24, 48, 96],
  },
  toastDuration: 4000,
}
