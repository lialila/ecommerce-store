// import styles from './page.module.scss';
import { itemWithAmount } from '../shop/page';
import Form from './Form';
import TotalPrice from './TotalPrice';

export default function CheckoutPage(props) {
  return (
    <main>
      <h1>CHECKOUT</h1>
      {/* <Form /> */}
      <TotalPrice />
    </main>
  );
}
