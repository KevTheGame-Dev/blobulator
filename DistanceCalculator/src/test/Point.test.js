/* eslint-disable no-undef */

const Point = require('../lib/Point');

test('successfully creates a Point', () => {
  const point = new Point(3, 4);
  expect(point.x).toBe(3);
  expect(point.y).toBe(4);
});
