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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.searchParams.reduce((p: any, c) => {
      p[c.provider] = this.getForecastFunction();
      return p;
    }, {});
  }
}
