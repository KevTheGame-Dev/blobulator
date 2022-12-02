
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
   * @param {Point} Point1
   * @param {Point} Point2
   * @returns {Point}
   */
  static add (Point1, Point2) {
    return new Point(Point1.x + Point2.x, Point1.y + Point2.y);
  }

  /**
   * Given two points, subtract the second point from the first
   *
   * @param {Point} Point1
   * @param {Point} Point2
   * @returns {Point}
   */
  static subtract (Point1, Point2) {
    return new Point(Point1.x - Point2.x, Point1.y - Point2.y);
  }

  /**
   * Takes two points and gives the absolute distance between them
   *
   * @param {Point} Point1
   * @param {Point} Point2
   * @returns {Number}
   */
  static distanceBetween (Point1, Point2) {
    return Math.sqrt(Math.pow(Point2.x - Point1.x, 2) + Math.pow(Point2.y - Point1.y, 2));
  }
};

module.exports = Point;
