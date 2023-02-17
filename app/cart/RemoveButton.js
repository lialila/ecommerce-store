'use client';
import { useRouter } from 'next/navigation';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './removeButton.module.scss';

export default function RemoveButton(props) {
  const router = useRouter();
  const handleRemove = (e) => {
    let itemsInCookies = getParsedCookie('cart');

    console.log(itemsInCookies);

    const foundItem = itemsInCookies.find((itemInCookie) => {
      return itemInCookie.id === props.item.id;
    });

    if (foundItem) {
      itemsInCookies = itemsInCookies.filter(
        (itemInCookies) => itemInCookies.id != foundItem.id,
      );
      setStringifiedCookie('cart', itemsInCookies);
    }
  };
  const handleRemoveAndRouterRefresh = (e) => {
    handleRemove(e);
    router.refresh(e);
  };

  return (
    <button
      className={styles.removeButton}
      data-test-id={`cart-product-remove-${props.item.id}`}
      onClick={handleRemoveAndRouterRefresh}
    >
      Remove
    </button>
  );
}
