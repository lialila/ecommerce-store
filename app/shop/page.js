import Image from 'next/image';
import Link from 'next/Link';
import { shop } from '../../database/shop';

export default function ShopPage() {
  return(
    <>
      <h1>SHOP</h1>
      <main>
        {shop.map((item) => {
          return (
          <div key={item.id}>
            <Link href={`/shop/${item.type}-${item.id}`}>
            <Image
              src={`/images/${item.type}-${item.id}.jpg`}
              alt={item.type}
              width="200"
              height="200"
            />
            <h3>{item.brand}</h3>
            <h2>{item.name}</h2></Link>
          </div>
          );
        })}
      </main>
    </>,
  );
}
