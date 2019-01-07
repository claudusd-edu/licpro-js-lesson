class T {
  constructor() { this.a = 'b'}
  b() {
    return this.a;
  }
}

const t = new T();
const u = t.b;
console.log(u());
