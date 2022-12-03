const Point = require('./Point');

/**
 * Defines a connection between two Points with a direction
 */
class Vector {
  /**
   * Constructs a Vector from x,y coords
   * Assumes a start position of 0,0
   *
   * @param {Number} x
   * @param {Number} y
   */
  constructor (x, y) {
    this.endPoint = new Point(x, y);
  }

  /**
   * Returns the x coord of the Point
   *
   * @returns {Number}
   */
  get x () {
    return this.endPoint.x;
  }

  /**
   * Returns the y coord of the Point
   *
   * @returns {Number}
   */
  get y () {
    return this.endPoint.y;
  }

  /**
   * Calculates the magnitude of the vector
   *
   * @returns {Number}
   */
  get magnitude () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  /**
   * Alias of magnitude
   *
   * @returns {Number}
   */
  get length () { return this.magnitude; }

  /**
   * Reverses the vector's direction
   */
  inverse () {
    this.endPoint.x = this.x * -1;
    this.endPoint.y = this.y * -1;
  }

  /**
   * Normalizes the vector
   *
   * @throws when the vector magnitude is 0
   */
  normalize () {
    const magnitude = this.magnitude;
    if (magnitude > 0) {
      this.endPoint.x = this.x / magnitude;
      this.endPoint.y = this.y / magnitude;
    } else {
      throw new Error('Vector has length of 0! Cannot normalize, would divide by 0');
    }
  }

  /**
   * Adds two Vectors
   *
   * @param {Vector} vector1
   * @param {Vector} vector2
   * @returns {Vector}
   */
  static add (vector1, vector2) {
    return Vector.fromPoint(Point.add(vector1.endPoint, vector2.endPoint));
  }

  /**
   * Subtracts two vectors
   *
   * @param {Vector} vector1
   * @param {Vector} vector2
   * @returns {Vector}
   */
  static subtract (vector1, vector2) {
    return Vector.vectorBetween(vector1.endPoint, vector2.endPoint);
  }

  /**
   * Creates a normalized version of the given vector
   *
   * @param {Vector} vector1
   * @throws when the magnitude of the given vector is 0
   * @returns {Vector}
   */
  static getNormalized (vector1) {
    const vector2 = Vector.clone(vector1);
    vector2.normalize();
    return vector2;
  }

  /**
   * Gets the vector between two points
   * Given Point A and Point B, returns vector AB
   *
   * @param {Point} point1
   * @param {Point} point2
   * @returns {Vector}
   */
  static vectorBetween (point1, point2) {
    return Vector.fromPoint(Point.subtract(point1, point2));
  }

  /**
   * Constructs a Vector from a Point
   * Assumes a start position of 0,0
   *
   * @param {Point} endPoint
   * @returns {Vector}
   */
  static fromPoint (endPoint) {
    return new Vector(endPoint.x, endPoint.y);
  }

  /**
   * Clones a vector
   *
   * @param {Vector} vector1
   * @returns {Vector}
   */
  static clone (vector1) {
    return Vector.fromPoint(vector1.endPoint);
  }
};

module.exports = Vector;
