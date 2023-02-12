// 'use client';
import { cookies } from 'next/headers';
import { shop } from '../../database/shop';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import { itemWithAmount } from '../shop/page';
import styles from './page.module.scss';

export default function CartPage(props) {
  const itemsCookie = cookies().get('itemsCookie');

  let itemsCookieParsed = [];

  if (itemsCookie) {
    itemsCookieParsed = JSON.parse(itemsCookie.value);
  }

  console.log('shop', shop);

  //adding property 'amount' to every item
  const itemsWithAmount = shop.map((item) => {
    const itemWithAmount = { ...item, amount: 0 };

    //read the cookie to find the item
    const itemInCookie = itemsCookieParsed.find(
      (itemObject) => item.id === itemObject.id,
    );

    //if find the item, update the amount
    if (itemInCookie) {
      itemWithAmount.amount = itemInCookie.amount;
    }
    return itemWithAmount;
  });
  //  filtering the items with amount over 0
  const itemsWithAmountOverNull = itemsWithAmount.filter(
    (item) => item.amount > 0,
  );

  const priceSum = [];

  return (
    <main>
      <h1>YOUR CART</h1>
      <div className={styles.main}>
        {itemsWithAmountOverNull.map((item) => {
          return (
            <div
              className={styles.product}
              key={item.id}
              data-test-id={`cart-product-${item.id}`}
            >
              {' '}
              {priceSum.push(item.price * item.amount)}.<h3>{item.name}</h3>
              <div>
                Quantity:
                <p data-test-id={`cart-product-quantity-${item.id}`}>
                  {item.amount}
                </p>
                <p>Price per item: {item.price}€</p>
                {/* <p>Price: {item.price * item.amount}€</p> */}
                <button
                  data-test-id={`cart-product-remove-${item.id}`}
                  // onClick={() => {
                  //   const itemsInCookies = getParsedCookie('itemsCookie');

                  //   const foundItem = itemsInCookies.find((itemInCookie) => {
                  //     return itemInCookie.id === props.item.id;
                  //   });
                  //   if (foundFruit) {
                  //     itemsInCookies.filter(
                  //       (itemsInCookies) => itemsInCookies.id != foundFruit,
                  //     );
                  //     setStringifiedCookie('itemsCookie', itemsInCookies);
                  //   }
                  // }}
                >
                  Remove the product
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p>Nice choice!</p>
      <h3>
        Total price:
        {priceSum.reduce((partialSum, a) => partialSum + a, 0)} €
      </h3>

      {/* should send to checkout page */}
      <button>Checkout</button>
    </main>
  );
}
