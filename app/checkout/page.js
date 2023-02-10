// import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <main>
      <h1>CHECKOUT</h1>
      <form
      // </main>onSubmit={placeOrder}
      >
        <label htmlFor="firstName">
          First name:
          <input
            data-test-id="checkout-first-name"
            value="firstName"
            // onChange={(e) => setFirstName(e.currentTarget.value)}
          />
        </label>
        <br />
        <label htmlFor="lastName">Last name: </label>
        <input
          data-test-id="checkout-last-name"
          value="lastName"
          // onChange={(e) => setLastName(e.currentTarget.value)}
        />{' '}
        <br />
        <label>Enter your e-mail:</label>
        <input type="email" value="e-mail" data-test-id="checkout-email" />{' '}
        <br />
        <div>
          <label>Enter your adress:</label>
          <input data-test-id="checkout-address" value="adress" />
          <label>Enter the city:</label>
          <input data-test-id="checkout-city" />
          <label>Enter the postal code:</label>
          <input data-test-id="checkout-postal-code" />
          <label>Enter the country:</label>
          <input data-test-id="checkout-country" />
        </div>
        <div>
          <label>Enter your credit card number:</label>
          <input data-test-id="checkout-credit-card" />
          <label>Enter the expiration date:</label>
          <input data-test-id="checkout-expiration-date" />
          <label>Enter the CVC:</label>
          <input data-test-id="checkout-security-code" />
        </div>
        <h2>Total:</h2>
        <p>Press Enter to submit</p>
        <button data-test-id="checkout-confirm-order">Confirm order</button>
      </form>
    </main>
  );
}
