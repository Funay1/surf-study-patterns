export class WaveForecastProviderMock {
  private searchParams: {
    provider: string;
  }[];
  constructor() {
    this.searchParams = [
      {
        provider: 'surfLine',
      },
    ];
  }
  static aWaveForecast() {
    return new WaveForecastProviderMock();
  }
  withInvalidProvider() {
    this.searchParams[0].provider = 'Invalid Provider Name';
    return this;
  }
  private getForecastFunction() {
    return {
      getForecast: async () => {},
    };
  }
  build() {
    return this.searchParams.reduce((p: any, c) => {
      p[c.provider] = this.getForecastFunction();
      return p;
    }, {});
  }
}
