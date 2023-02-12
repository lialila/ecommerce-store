'use client';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// itemsCookie = [{id:number, amount;number, price: number}]

export default function Item(props) {
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
            type="submit"
            data-test-id="product-add-to-cart"
            onClick={() => {
              //get the cookie
              const itemsInCookies = getParsedCookie('itemsCookie');
              console.log('getParsedCookie', itemsInCookies);

              // if there is no cookie, do nothing
              if (itemsQuantity * 1 !== NaN && itemsQuantity * 1 >= 0) {
                if (!itemsInCookies) {
                  setStringifiedCookie('itemsCookie', [
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
                  console.log('itemsQuantity', itemsQuantity);
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
              console.log('items quantity', +itemsQuantity);
              setStringifiedCookie('itemsCookie', itemsInCookies);
            }}
          >
            Add to cart
          </button>
        </form>
      </div>
    </>
  );
}
