class Point {
  constructor(top, left) {
    this.top = top;
    this.left = left;
  }

  distance({top, left}) {
    const a = Math.pow(top-this.top, 2);
    const b = Math.pow(left-this.left, 2);
    return Math.sqrt(a*a + b*b);
  }
}
Point.ORIGIN = new Point(0,0);
module.exports = Point;
