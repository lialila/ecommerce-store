'use client';

import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function RemoveButton(props) {
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
