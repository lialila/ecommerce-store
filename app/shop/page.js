import Image from 'next/image';
import Link from 'next/Link';
import { shop } from '../../database/shop';
import styles from './page.module.scss';

export default function ShopPage() {
  return(
    <>
      <h1 className={styles.h1}>SHOP</h1>
      <main className={styles.main}>
        <ul>
        {shop.map((item) => {
          return (
            <li key={item.id} className={styles.card}>
            <Link href={`/shop/${item.type}`}>
            <Image
              src={`/images/${item.type}-${item.id}.jpg`}
              alt={item.type}
              width="160"
              height="160"
            />
            <h3>{item.name}</h3>
            <h2>{item.price}</h2></Link>
          </li>
          );
        })}
        </ul>
      </main>
    </>,
  );
}
