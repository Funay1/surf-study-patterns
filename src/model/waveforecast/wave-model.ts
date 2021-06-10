declare module '@Domain' {
  interface swell {
    height: number;
    period: number;
    direction: number;
  }
  export interface wave {
    height: {
      min: number;
      max: number;
      unit: string;
    };
    swells: swell[];
  }
}
