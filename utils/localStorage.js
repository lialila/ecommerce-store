// to set items to local storage

//more robust way to get items to local storage

export function getLocalStorage(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return undefined;
  }
}

export function setLocalStorage(key, value) {
  //if we are in the browser
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
