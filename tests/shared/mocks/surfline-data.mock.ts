import {SurflineData} from '@app/model/surfline/index';
export class SurflineDataMock {
  private surfLineData: SurflineData;
  private DEFAULT_LOCATION = {
    lat: 0,
    lon: 0,
  };
  constructor() {
    this.surfLineData = SurflineData.create({
      associated: {
        utcOffset: 0,
        units: {
          model: '',
          swellHeight: '',
          temperature: '',
          tideHeight: '',
          waveHeight: '',
          windSpeed: '',
        },
        forecastLocation: {
          ...this.DEFAULT_LOCATION,
        },
        location: {
          ...this.DEFAULT_LOCATION,
        },
        offshoreLocation: {
          ...this.DEFAULT_LOCATION,
        },
      },
      data: {
        wave: [
          {
            surf: {
              max: 0,
              min: 0,
              optimalScore: 0,
            },
            swells: [
              {
                direction: 0,
                directionMin: 0,
                height: 0,
                optimalScore: 0,
                period: 0,
              },
            ],
          },
        ],
      },
    });
  }
  static aSurflineData() {
    return new SurflineDataMock();
  }
  withoutWavesInformation() {
    this.surfLineData.data.wave = [];
    return this;
  }
  build() {
    return this.surfLineData;
  }
}
