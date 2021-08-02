import {Associated} from './associated.model';
import {Wave} from './wave.model';

interface data {
  associated: Associated;
  data: {
    wave: Wave[];
  };
}

export class SurflineData implements data {
  public readonly id?: string;
  public associated!: Associated;
  public data!: {wave: Wave[]};
  constructor(props: SurflineData) {
    return Object.assign(this, props);
  }
  static create(props: SurflineData) {
    const surflineData = new SurflineData(props);
    return surflineData;
  }
}

export default {SurflineData};
