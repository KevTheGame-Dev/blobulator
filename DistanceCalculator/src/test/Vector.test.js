/* eslint-disable no-undef */

const Vector = require('../lib/Vector');
const Point = require('../lib/Point');

describe('Vector', () => {
  describe('constructor', () => {
    test('creates a Vector', () => {
      const vector = new Vector(1, 2);
      expect(vector.endPoint).toBeInstanceOf(Point);
      expect(vector.x).toBe(1);
      expect(vector.y).toBe(2);
    });
  });

  describe('instance methods', () => {
    describe('get magnitude', () => {
      test('returns magnitude', () => {
        const vector = new Vector(3, 4);

        const magnitude = vector.magnitude;
        expect(magnitude).toBe(5);
      });
    });

    describe('get length', () => {
      test('returns length, aka magnitude', () => {
        const vector = new Vector(3, 4);

        const magnitude = vector.length; // length is an alias of magnitude
        expect(magnitude).toBe(5);
      });
    });

    describe('inverse', () => {
      test('reverses the direction of the vector', () => {
        const vector = new Vector(3, 4);
        vector.inverse();
        expect(vector.x).toBe(-3);
        expect(vector.y).toBe(-4);
      });
    });

    describe('normalize', () => {
      test('normalizes the vector if the magnitude is not 0', () => {
        const vector = new Vector(3, 9);
        vector.normalize();
        // Because of the nature of JS, we won't always get exactly 1 for the magnitude
        // But since .toFixed rounds the number, we can still expect an exact value of 1
        expect(parseFloat(vector.magnitude.toFixed(9))).toBe(1);
      });

      test('if the magnitude is 0, throws an error', () => {
        const vector = new Vector(0, 0);
        expect(() => vector.normalize()).toThrow();
      });
    });
  });

  describe('static methods', () => {
    describe('add', () => {
      test('returns a new vector that is the result of adding two Vectors', () => {
        const vector1 = new Vector(1, 1);
        const vector2 = new Vector(3, 5);

        const resultingVector = Vector.add(vector1, vector2);
        expect(resultingVector.x).toBe(4);
        expect(resultingVector.y).toBe(6);
      });
    });

    describe('subtract', () => {
      test('returns a new vector that is the result of subtracting two Vectors', () => {
        const vector1 = new Vector(5, 5);
        const vector2 = new Vector(3, 4);

        const resultingVector = Vector.subtract(vector1, vector2);
        expect(resultingVector.x).toBe(2);
        expect(resultingVector.y).toBe(1);
      });
    });

    describe('getNormalized', () => {
      test('creates a normalized version of the vector', () => {
        const vector1 = new Vector(3, 3);

        const vector2 = Vector.getNormalized(vector1);
        expect(vector2.magnitude).toBe(1);
      });
    });

    describe('vectorBetween', () => {
      test('creates a new vector from two given Points', () => {
        const point1 = new Point(1, 1);
        const point2 = new Point(5, 3);

        const resultingVector = Vector.vectorBetween(point2, point1);
        expect(resultingVector.x).toBe(4);
        expect(resultingVector.y).toBe(2);
      });
    });

    describe('fromPoint', () => {
      test('creates a vector from a Point object', () => {
        const point = new Point(1, 2);
        const vector = Vector.fromPoint(point);
        expect(vector.endPoint).toBeInstanceOf(Point);
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(2);
      });
    });

    describe('clone', () => {
      test('creates a new vector with the same data as the given one', () => {
        const vector1 = new Vector(1, 2);
        const vector2 = Vector.clone(vector1);
        expect(vector2).not.toBe(vector1);
        expect(vector2.x).toBe(vector1.x);
        expect(vector2.y).toBe(vector1.y);
      });
    });
  });
});
