import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
  stringifyCookieValue,
} from '../cookies';

// Unit: Test functions for adding and removing info from cookie
// Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
// Unit: Test cart sum function

// this is closest to what we want to test
// testing a single, small function that doesnt depend  on a library
// no space!
test('stringify cookie value', () => {
  expect(stringifyCookieValue([{ id: 1, amount: 2 }])).toBe(
    '[{"id":1,"amount":2}]',
  );
});

test('set, get and delete', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, amount: 2 }],
  };

  // first make sure that the cookie is undefined
  // use .toBe to compare primitive vals
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  // expect(getParsedCookie(cookie.key)).toBeUndefined();

  // Set a cookie, check if the func throws an error
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // get cookie. use toStrictEqual to test that objects have the same type as well as structure
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // best practice: to clear the state after tests
  expect(deleteCookie(cookie.key)).toBe(undefined);
  // check if cookie is undefined
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});
