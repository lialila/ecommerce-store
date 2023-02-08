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
      <button>-</button>
      <button
        onClick={() => {
          const fruitsInCookies = getParsedCookie('fruitsCookie');
          // 1.cookie doesn;t exist
          if (!fruitsInCookies) {
            setStringifiedCookie('fruitsCookie', [
              { id: props.fruit.id, amount: 1 },
            ]);
            //if cookie exists but the fruit is not inside of the cookie
          } else if (
            fruitsInCookies.find((fruitInCookie) => {
              return fruitInCookie.id === props.fruit.id;
            })
          ) {
            const foundFruit = fruitsInCookies.find((fruitInCookie) => {
              return fruitInCookie.id === props.fruit.id;
            });
            foundFruit.amount++;
            setStringifiedCookie('fruitsCookie', fruitsInCookies);
          } else {
            setStringifiedCookie('fruitsCookie', [
              ...fruitsInCookies,
              { id: props.fruit.id, stars: 1 },
            ]);
          }
        }}
      >
        +
      </button>

      <button>Add to card</button>
    </>
  );
}
