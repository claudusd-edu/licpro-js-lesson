class T {
  constructor() {
    this.a = 'b';
    this.b = this.b.bind(this);
  }
  b() {
    return this.a;
  }
}
