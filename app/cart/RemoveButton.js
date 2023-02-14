'use client';

import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function RemoveButton(props) {
  const [removeItem, setRemoveItem] = useState();

  const handleRemove = () => {
    let itemsInCookies = getParsedCookie('itemsCookie');

    console.log(itemsInCookies);

    const foundItem = itemsInCookies.find((itemInCookie) => {
      return itemInCookie.id === props.item.id;
    });

    if (foundItem) {
      itemsInCookies = itemsInCookies.filter(
        (itemInCookies) => itemInCookies.id != foundItem.id,
      );
      setStringifiedCookie('itemsCookie', itemsInCookies);
    }
  };

  return (
    <button
      data-test-id={`cart-product-remove-${props.item.id}`}
      onClick={handleRemove}
    >
      Remove the product
    </button>
  );
}
