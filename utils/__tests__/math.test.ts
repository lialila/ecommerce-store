import { add } from '../math';

test('add two numbers together', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(100, 200)).toBe(300);
  expect(add(2, 2)).toBe(4);
});

// test('throw an error if args are not numbers', () => {
//   // yarn tsc to run typescript test, @ts-expect-errortesting incorrect arguments type, but yarn jest will not give an error
//   expect(() => add(1, '1')).toThrow('Pass only numbers');
//   expect(() => add('asd', '1')).toThrow('Pass only numbers');
//   expect(() => add(true, '1')).toThrow('Pass only numbers');
// });
