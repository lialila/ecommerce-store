'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function From(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <label htmlFor="firstName">
        First name:
        <input
          data-test-id="checkout-first-name"
          value="firstName"
          required
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </label>
      <br />
      <label htmlFor="lastName">Last name: </label>
      <input
        data-test-id="checkout-last-name"
        value="lastName"
        required
        onChange={(e) => setLastName(e.currentTarget.value)}
      />
      <br />
      <label>Enter your e-mail:</label>
      <input
        type="email"
        value="e-mail"
        data-test-id="checkout-email"
        required
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      <div>
        <label>Enter your adress:</label>
        <input data-test-id="checkout-address" value="adress" required />
        <label>Enter the city:</label>
        <input data-test-id="checkout-city" required />
        <label>Enter the postal code:</label>
        <input data-test-id="checkout-postal-code" required />
        <label>Enter the country:</label>
        <input data-test-id="checkout-country" required />
      </div>
      <div>
        <label>Enter your credit card number:</label>
        <input data-test-id="checkout-credit-card" required />
        <label>Enter the expiration date:</label>
        <input data-test-id="checkout-expiration-date" required />
        <label>Enter the CVC:</label>
        <input data-test-id="checkout-security-code" required />
      </div>
      <p>Press Enter to submit</p>
      <Link href="./thankyou">
        <button data-test-id="checkout-confirm-order">Confirm order</button>
      </Link>
    </form>
  );
}
