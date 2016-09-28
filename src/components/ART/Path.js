
class Path {
  constructor(path) {
    this.path = path || [];
  }
  push() {
    return this;
  }
  reset() {
    return this;
  }
  move() {
    return this;
  }
  moveTo() {
    return this;
  }
  line() {
    return this;
  }
  lineTo() {
    return this;
  }
  curve() {
    return this;
  }
  curveTo() {
    return this;
  }
  arc() {
    return this;
  }
  arcTo() {
    return this;
  }
  counterArc() {
    return this;
  }
  counterArcTo() {
    return this;
  }
  close() {
    return this;
  }
  toJSON() {
    return JSON.stringify(this.path);
  }
}

module.exports = Path;
