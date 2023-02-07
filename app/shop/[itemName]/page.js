import Image from 'next/image';
import { notFound } from 'next/navigation';
import { shop } from '../../../database/shop';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';
export default function ItemNamePage(props) {
  const singleItem = shop.find((singleItem) => {
    return singleItem.type === props.params.itemName;
  });

  if (!singleItem) {
    throw new Error('this action is not allowed');
    // notFound();
  }
  return (
    <main className={styles.main}>
      <div className={styles.itemImage}>
        <Image
          src={`/images/${singleItem.type}-${singleItem.id}.jpg`}
          alt={singleItem.type}
          width="200"
          height="200"
        />
      </div>
      <div className={styles.itemText}>
        <h1>{singleItem.name} 10 seeds</h1>
        <h2>{singleItem.shu}</h2>
      </div>
    </main>
  );
}
