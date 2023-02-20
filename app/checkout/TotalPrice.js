import { cookies } from 'next/headers';
import { getShop, shop } from '../../database/shop';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default async function TotalPrice() {
  const itemsCookie = cookies().get('cart');

  let itemsCookieParsed = [];

  if (itemsCookie) {
    itemsCookieParsed = JSON.parse(itemsCookie.value);
  }
  const shop = await getShop();

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

  itemsWithAmountOverNull.map((item) =>
    priceSum.push(item.price * item.amount),
  );
  console.log(priceSum);

  // const totalPrice = priceSum.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <h3>
      Total Price: {priceSum.reduce((partialSum, a) => partialSum + a, 0)} €
    </h3>
  );
}
