import Cookies from 'js-cookie';

// to get data from cookies without parsing all the time

export function getParsedCookie(key: string): CookieValue | undefined {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
    // should be a string
  } catch (error) {
    return undefined;
  }
}

export type CookieValue = {
  id: number;
  amount: number;
}[];
// more robust way to set cookies without stringify all the time
export function setStringifiedCookie(key: string, value: CookieValue) {
  Cookies.set(key, JSON.stringify(value));
}
export function deleteCookie(key: string) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value: CookieValue) {
  return JSON.stringify(value);
}
