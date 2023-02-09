'use client';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// import { useState } from 'react';
//fruitsCookie = [{id: of the fruit, }]
export default function Fruit(props) {
  return (
    <>
      <div>
        {props.fruit.id}
        {props.fruit.name}
      </div>
      <button
        onClick={() => {
          // get the cookie
          const fruitsInCookies = getParsedCookie('fruitsCookie');

          //if there is no cookie, we do nothing, we just return
          if (!fruitsInCookies) {
            return;
          }
          const foundFruit = fruitsInCookies.find((fruitInCookie) => {
            return fruitInCookie.id === props.fruit.id;
          });

          // my fruit is inside of the cookie
          if (foundFruit) {
            foundFruit.amount--;
            if (foundFruit.amount < 0) {
              foundFruit.amount = 0;
            }
            // my fruit is not inside of the cookie - do nothing,
            // update the cookie with the new values
            setStringifiedCookie('fruitsCookie', fruitsInCookies);
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          // get the cookie
          const fruitsInCookies = getParsedCookie('fruitsCookie');

          //if there is no cookie, we initialize the value with start 1
          if (!fruitsInCookies) {
            setStringifiedCookie('fruitsCookie', [
              { id: props.fruit.id, amount: 1 },
            ]);
            //if there is no cookie, the funcion will stop here
            return;
          }
          const foundFruit = fruitsInCookies.find((fruitInCookie) => {
            return fruitInCookie.id === props.fruit.id;
          });

          // my fruit is inside of the cookie
          if (foundFruit) {
            foundFruit.amount++;

            // my fruit is not inside of the cookie
          } else {
            fruitsInCookies.push({ id: props.fruit.id, amount: 1 });
          }

          setStringifiedCookie('fruitsCookie', fruitsInCookies);
        }}
      >
        +
      </button>
      <button>Add to card</button>
    </>
  );
}
