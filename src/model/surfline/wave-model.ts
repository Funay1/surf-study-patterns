declare module '@Surfline' {
  interface Swell {
    height: number;
    period: number;
    direction: number;
    directionMin: number;
    optimalScore: number;
  }
  export interface Wave {
    surf: {
      min: number;
      max: number;
      optimalScore: number;
    };
    swells: Swell[];
  }
}
