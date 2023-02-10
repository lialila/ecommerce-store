import { cookies } from 'next/headers';
import Link from 'next/link';
import { fruits } from '../../database/fruits';

// export const dynamic = 'force-dynamic';

export default function FruitsPage(props) {
  const fruitsCookie = cookies().get('fruitsCookie');

  let fruitsCookieParsed = [];

  if (fruitsCookie) {
    fruitsCookieParsed = JSON.parse(fruitsCookie.value);
  }

  console.log('fruits', fruits);

  //adding property amount to every fruit

  const fruitsWithAmount = fruits.map((fruit) => {
    const fruitWithAmount = { ...fruit, amount: 0 };

    //i read the cookie to find the fruit
    const fruitInCookie = fruitsCookieParsed.find(
      (fruitObject) => fruit.id === fruitObject.id,
    );

    //if i find the fruit, i update the amout
    if (fruitInCookie) {
      fruitWithAmount.amount = fruitInCookie.amount;
    }
    return fruitWithAmount;
  });

  console.log('fruitsWithAmount', fruitsWithAmount);

  return (
    <div>
      {fruitsWithAmount.map((fruit) => {
        return (
          <div key={fruit.id}>
            <Link href={`/fruits/${fruit.name.toLowerCase()}`}>
              {' '}
              <h2>{fruit.name}</h2>
            </Link>
            <p>Your amount: {fruit.amount}</p>
          </div>
        );
      })}
    </div>
  );
}
