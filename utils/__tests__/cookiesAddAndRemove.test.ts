// Unit: Test functions for adding and removing info from cookie
// Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
// Unit: Test cart sum function

import { getParsedCookie, setStringifiedCookie } from '../cookies';

// get the cookie
const itemsInCookies = getParsedCookie('cart');
console.log('getParsedCookie', itemsInCookies);

// if there is no cookie, do nothing
if (!Number.isNaN(itemsQuantity * 1) && itemsQuantity * 1 >= 0) {
  if (!itemsInCookies) {
    setStringifiedCookie('cart', [
      {
        id: props.item.id,
        amount: Math.floor(itemsQuantity * 1),
      },
    ]);
    return;
  }
  const foundItem = itemsInCookies.find((itemInCookie) => {
    return itemInCookie.id === props.item.id;
  });
  // if the item is inside the cookie
  if (foundItem) {
    foundItem.amount += Math.floor(itemsQuantity * 1);
  } else {
    itemsInCookies.push({
      id: props.item.id,
      amount: Math.floor(itemsQuantity * 1),
    });
  }
} else {
  return;
}

setStringifiedCookie('cart', itemsInCookies);
router.refresh();
