'use client';
import Image from 'next/image';
// import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// const [itemsQuantity, setItemsQuantity] = useState('1');
// import { itemsWithAmount } from '../shop/page';

// import styles from './page.module.scss';

export default function Item(props) {
  return (
    <>
      <img
        data-test-id="product-image"
        src={`/images/${props.item.type}-${props.item.id}.jpg`}
        alt={props.item.type}
        width="160"
        height="160"
      />
      <h1>{props.item.name}</h1>
      <div>{props.item.description}</div>
      <div>{props.item.shu}</div>
      <div>
        10 seeds
        <p data-test-id="product-image">{props.item.price}</p>€
      </div>
      <div>
        <label for="amount">Add product to your cart</label>
        <input
          value="quantity"
          data-test-id="product-quantity"
          // onChange={(e) => setItemsQuantity(e.target.value)}
        />
        <button
          onClick={() => {
            //get the cookie
            const itemsInCookies = getParsedCookie('itemsCookie');

            //if there is no cookie, do nothing
            if (!itemsInCookies) {
              return;
            }
            const foundItem = itemsInCookies.find((itemInCookie) => {
              return itemInCookie.id === props.item.id;
            });
            // if the item is inside the cookie
            if (foundItem) {
              foundItem.amount--;
              if (foundItem.amount < 0) {
                foundItem.amount = 0;
              }
              setStringifiedCookie('itemsCookie', itemsInCookies);
            }
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            //get the cookie
            const itemsInCookies = getParsedCookie('itemsCookie');

            //if there is no cookie, do nothing
            if (!itemsInCookies) {
              setStringifiedCookie('itemsCookie', [
                { id: props.item.id, amount: 1 },
              ]);
              return;
            }
            const foundItem = itemsInCookies.find((itemInCookie) => {
              return itemInCookie.id === props.item.id;
            });
            // if the item is inside the cookie
            if (foundItem) {
              foundItem.amount++;
            } else {
              itemsInCookies.push({ id: props.item.id, amount: 1 });
            }

            setStringifiedCookie('itemsCookie', itemsInCookies);
          }}
        >
          +
        </button>
        <button data-test-id="product-add-to-cart">Add to card</button>
        <h2>In your cart: {props.item.amount}</h2>
      </div>
    </>
  );
}
