import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/Link';
import { shop } from '../../database/shop';
import styles from './page.module.scss';

export default function ShopPage(props) {
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
                  href={`/shop/${item.id.toString()}`}
                  data-test-id={`${item.name}-${item.id}`}
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
