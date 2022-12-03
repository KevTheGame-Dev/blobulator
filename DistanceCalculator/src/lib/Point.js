/**
 * A class that defines a point in 2D space
 */
class Point {
  /**
   * Constructs a Point
   *
   * @param {Number} x
   * @param {Number} y
   */
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Given two Points, add the two together to form a new Point
   *
   * @param {Point} point1
   * @param {Point} point2
   * @returns {Point}
   */
  static add (point1, point2) {
    return new Point(point1.x + point2.x, point1.y + point2.y);
  }

  /**
   * Given two points, subtract the second point from the first
   *
   * @param {Point} point1
   * @param {Point} point2
   * @returns {Point}
   */
  static subtract (point1, point2) {
    return new Point(point1.x - point2.x, point1.y - point2.y);
  }

  /**
   * Takes two points and gives the absolute distance between them
   *
   * @param {Point} point1
   * @param {Point} point2
   * @returns {Number}
   */
  static distanceBetween (point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }
};

module.exports = Point;
