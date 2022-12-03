/* eslint-disable no-undef */

const Point = require('../lib/Point');

describe('Point', () => {
  describe('constructor', () => {
    test('successfully creates a Point', () => {
      const point = new Point(3, 4);
      expect(point.x).toBe(3);
      expect(point.y).toBe(4);
    });
  });

  describe('static methods', () => {
    describe('add', () => {
      test('successfully adds two Points', () => {
        const point1 = new Point(1, 1);
        const point2 = new Point(3, 5);

        const resultingPoint = Point.add(point1, point2);
        expect(resultingPoint.x).toBe(4);
        expect(resultingPoint.y).toBe(6);
      });
    });

    describe('subtract', () => {
      test('succesfully subtracts two Points', () => {
        const point1 = new Point(5, 5);
        const point2 = new Point(3, 4);

        const resultingPoint = Point.subtract(point1, point2);
        expect(resultingPoint.x).toBe(2);
        expect(resultingPoint.y).toBe(1);
      });
    });

    describe('distanceBetween', () => {
      test('succesfully calculates the distance between two Points', () => {
        const point1 = new Point(1, 1);
        const point2 = new Point(4, 5);

        const distance = Point.distanceBetween(point1, point2);
        expect(distance).toBe(5);
      });
    });
  });
});
