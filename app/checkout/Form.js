'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function From() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <form>
      <label htmlFor="firstName">
        First name:
        <input
          data-test-id="checkout-first-name"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="lastName">Last name: </label>
      <input
        data-test-id="checkout-last-name"
        value={lastName}
        required
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Enter your e-mail:</label>
      <input
        type="email"
        data-test-id="checkout-email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <div>
        <label>Enter your adress:</label>
        <input
          data-test-id="checkout-address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Enter the city:</label>
        <input
          data-test-id="checkout-city"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Enter the postal code:</label>
        <input
          data-test-id="checkout-postal-code"
          value={postalCode}
          required
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <label>Enter the country:</label>
        <input
          data-test-id="checkout-country"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <label>Enter your credit card number:</label>
        <input
          data-test-id="checkout-credit-card"
          value={creditCardNumber}
          required
          onChange={(e) => setCreditCardNumber(e.target.value)}
        />
        <label>Enter the expiration date:</label>
        <input
          data-test-id="checkout-expiration-date"
          value={expirationDate}
          required
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <label>Enter the CVC:</label>
        <input
          data-test-id="checkout-security-code"
          value={cvc}
          required
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      <p>Press Enter to submit</p>
      <Link href="./thankyou">
        <button
          data-test-id="checkout-confirm-order"
          type="submit"
          disabled={
            firstName.length === 0 ||
            lastName.length === 0 ||
            email.length === 0 ||
            address.length === 0 ||
            city.length === 0 ||
            postalCode.length === 0 ||
            country.length === 0 ||
            creditCardNumber.length === 0 ||
            expirationDate.length === 0 ||
            cvc.length === 0
          }
        >
          Confirm order
        </button>
      </Link>
    </form>
  );
}
