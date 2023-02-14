import { cookies } from 'next/headers';
import Link from 'next/link';
import { shop } from '../../database/shop';
import { itemWithAmount } from '../shop/page';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

// import TotalPrice from './TotalPrice';

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

  //making a new array, in order to push there the prices from the itemsWithAmountOverNull
  const priceSum = [];

  return (
    <main>
      <h1>YOUR CART</h1>
      <div className={styles.main}>
        {itemsWithAmountOverNull.map((item) => {
          priceSum.push(item.price * item.amount);

          return (
            <div
              className={styles.product}
              key={item.id}
              data-test-id={`cart-product-${item.id}`}
            >
              {' '}
              <h3>{item.name}</h3>
              <div>
                Quantity:
                <p data-test-id={`cart-product-quantity-${item.id}`}>
                  {item.amount}
                </p>
                <p>Price per item: {item.price}€</p>
                {/* <p>Price: {item.price * item.amount}€</p> */}{' '}
                <RemoveButton item={item} />
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
      <Link href="../checkout">
        <button>Checkout</button>
      </Link>
    </main>
  );
}
