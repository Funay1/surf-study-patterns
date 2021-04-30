export class MissingProvider extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'Missing Provider';
  }
}
