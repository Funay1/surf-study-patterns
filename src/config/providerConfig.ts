export interface ProviderConfig {
  baseURL: string;
  endpoints: {
    wave: string;
  };
  provider: string;
}

export const providersConfig: ProviderConfig[] = [
  {
    provider: 'surfline',
    baseURL: 'https://services.surfline.com/',
    endpoints: {
      wave: 'kbyg/spots/forecasts/wave',
      // wind: 'kbyg/spots/forecasts/wind',
    },
  },
  {
    provider: 'surfguru',
    baseURL: 'https://surfguru.pictures/',
    endpoints: {
      wave: '/dados/praia.php',
      // wind: 'https://surfguru.com.br/leituras/dados/SBVT',
    },
  },
  {
    provider: 'waves',
    baseURL: 'https://previsao.waves.com.br/',
    endpoints: {
      wave: 'areainfo',
      // wind: '',
    },
  },
];
