'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  getParsedCookie,
  setStringifiedCookie,
} from '../../../utils/cookies.ts';

// import styles from './page.module.scss';

export default function Item(props) {
  const router = useRouter();
  const [itemsQuantity, setItemsQuantity] = useState(1);

  return (
    <>
      <img
        data-test-id="product-image"
        src={`/images/${props.item.type}-${props.item.id}.png`}
        alt={props.item.type}
        width="160"
        height="160"
      />
      <h1>{props.item.name}</h1>
      <div>{props.item.description}</div>
      <div>{props.item.shu}</div>
      <div>
        10 seeds
        <p data-test-id="product-image">{props.item.price} €</p>
      </div>
      <div>
        <form name="inputnumber">
          <label htmlFor="amount">Add product to your cart</label>
          <input
            type="number"
            min="0"
            value={itemsQuantity}
            data-test-id="product-quantity"
            required
            onChange={(e) => {
              setItemsQuantity(e.target.value);
            }}
          />
          <button
            data-test-id="product-add-to-cart"
            onClick={(e) => {
              e.preventDefault();

              // get the cookie
              const itemsInCookies = getParsedCookie('cart');
              console.log('getParsedCookie', itemsInCookies);

              // if there is no cookie, do nothing
              if (!Number.isNaN(itemsQuantity * 1) && itemsQuantity * 1 >= 0) {
                if (!itemsInCookies) {
                  setStringifiedCookie('cart', [
                    {
                      id: props.item.id,
                      amount: Math.floor(itemsQuantity * 1),
                    },
                  ]);
                  return;
                }
                const foundItem = itemsInCookies.find((itemInCookie) => {
                  return itemInCookie.id === props.item.id;
                });
                // if the item is inside the cookie
                if (foundItem) {
                  foundItem.amount += Math.floor(itemsQuantity * 1);
                } else {
                  itemsInCookies.push({
                    id: props.item.id,
                    amount: Math.floor(itemsQuantity * 1),
                  });
                }
              } else {
                return;
              }

              setStringifiedCookie('cart', itemsInCookies);
              router.refresh();
            }}
          >
            Add to cart
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push('../cart');
            }}
          >
            My Cart
          </button>
        </form>
      </div>
    </>
  );
}
