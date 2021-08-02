import Domain from '@Domain';
declare module '@Domain' {
  interface wave {
    height: height;
    swells: swell[];
  }
}
export class Wave implements Domain.wave {
  public readonly id?: string;
  public height!: Domain.height;
  public swells!: Domain.swell[];
  constructor(props: Wave) {
    return Object.assign(this, props);
  }
  static create(props: Wave) {
    const wave = new Wave(props);
    return wave;
  }
}
