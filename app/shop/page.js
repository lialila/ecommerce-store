import Image from 'next/image';
import Link from 'next/link';
import { getShop } from '../../database/shop';
import styles from './page.module.scss';

export const metadata = {
  title: {
    default: 'NINE CIRCLES SHOP',
    description: 'The hottest chilis in the world',
  },
};

export const dynamic = 'force-dynamic';

export default async function ShopPage(props) {
  const shop = await getShop();

  return (
    <>
      <Link href="/shop" data-test-id="products-link">
        <h1 className={styles.h1}>SHOP</h1>
      </Link>
      <main className={styles.main}>
        <ul>
          {shop.map((item) => {
            return (
              <li key={item.id} className={styles.card}>
                <Link
                  href={`/shop/${item.id}`}
                  data-test-id={`product-${item.id}`}
                >
                  <Image
                    className={styles.img}
                    src={`/images/${item.type}-${item.id}.png`}
                    alt={item.type}
                    width="140"
                    height="140"
                  />
                  <h3>{item.name}</h3>
                  <h2>{item.price} €</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
