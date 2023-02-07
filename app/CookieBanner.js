'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  //this only exists on the client / browser
  useEffect(() => {
    //this func triggers on first render

    //check if there is local storage field for the banner
    //areCookiesTermsAccepted is a browser storage name
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');

    //if not, the value should be true, otherwise the value should be whatever what is saved ib local storage
    const initialValue = localStorage === undefined ? false : localStorageValue;

    setAreCookiesTermsAccepted(initialValue);
  }, []);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>
          This is cookie police, please accept the terms and conditions to
          continue
          <button
            onClick={() => {
              setAreCookiesTermsAccepted(true);

              setLocalStorage('areCookiesTermsAccepted', true);
            }}
          >
            Accept
          </button>
        </div>
      </>
    )
  );
}
