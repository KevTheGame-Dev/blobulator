const Point = require('./Point');

/**
 * Defines a connection between two Points with a direction
 */
class Vector {
  /**
   * Constructs a Vector from two Points
   * Direction is assumed to be from Point1 to Point2
   *
   * @param {Point} startPoint
   * @param {Point} endPoint
   */
  constructor (startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  /**
   * Adds two Vectors
   *
   * @param {Vector} Vector1
   * @param {Vector} Vector2
   * @returns {Vector}
   */
  static addVectors (Vector1, Vector2) {
    return new Vector(Point.add(Vector1.startPoint, Vector2.startPoint), Point.add(Vector1.endPoint, Vector2.endPoint));
  }

  /**
   * Subtracts two vectors
   *
   * @param {Vector} Vector1
   * @param {Vector} Vector2
   * @returns {Vector}
   */
  static subtractVectors (Vector1, Vector2) {
    return new Vector(Point.subtract(Vector1.startPoint, Vector2.startPoint), Point.subtract(Vector1.endPoint, Vector2.endPoint));
  }
};

module.exports = Vector;
