import { cookies } from 'next/headers';
import { shop } from '../../database/shop';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
// import styles from './page.module.scss';
import { itemWithAmount } from '../shop/page';
import Form from './Form';

export default function CheckoutPage(props) {
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

  console.log(itemsWithAmountOverNull);

  itemsWithAmountOverNull.map((item) => priceSum.push(item.priceSum));
  console.log(priceSum);

  return (
    <main>
      <h1>CHECKOUT</h1>
      {/* <Form /> */}
      <h3>
        Total price: {priceSum.reduce((partialSum, a) => partialSum + a, 0)}
      </h3>
    </main>
  );
}
