/* eslint-disable no-undef */

const Vector = require('../lib/Vector');
const Point = require('../lib/Point');

test('successfully creates a Vector', () => {
  const p1 = new Point(1, 1);
  const p2 = new Point(4, 4);
  const vector = new Vector(p1, p2);
  expect(vector.startPoint).toBe(p1);
  expect(vector.endPoint).toBe(p2);
});
