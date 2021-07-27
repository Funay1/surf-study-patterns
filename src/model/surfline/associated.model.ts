declare module '@Surfline' {
  export interface Associated {
    units: Units;
    location: Location;
    forecastLocation: Location;
    offshoreLocation: Location;
    utcOffset: number;
  }
  interface Units {
    temperature: string;
    tideHeight: string;
    swellHeight: string;
    waveHeight: string;
    windSpeed: string;
    model: string;
  }
  interface Location {
    lon: number;
    lat: number;
  }
}
