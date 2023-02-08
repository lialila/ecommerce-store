import Cookies from 'js-cookie';

// to get data from cookies without parsing all the time

export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);
  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue); //should be a string
  } catch (error) {
    return undefined;
  }
}

//more robust way to set cookies without stringify all the time

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
