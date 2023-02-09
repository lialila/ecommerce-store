'use client';
import Image from 'next/image';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// import styles from './page.module.scss';

export default function Item(props) {
  return (
    <>
      <Image
        src={`/images/${props.item.type}-${props.item.id}.jpg`}
        alt={props.item.type}
        width="160"
        height="160"
      />
      <h1>{props.item.name}</h1>
      <div>{props.item.description}</div>
      <div>{props.item.shu}</div>
      <div>10 seeds {props.item.price}</div>
      <div>
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
        <button>Add to cart</button>
      </div>
    </>
  );
}
