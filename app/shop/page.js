import Image from 'next/image';
import Link from 'next/Link';
import { products } from '../../database/products';

export default function ShopPage() {
  return(
    <>
      <h1>Products</h1>
      <main>
        {products.map((product) => {
          return (
          <div key={product.id}>
            <Link href={`/products/${product.type}-${product.id}`}>
            <Image
              src={`/images/${product.type}-${product.id}.jpg`}
              alt={product.type}
              width="200"
              height="200"
            />
            <h3>{product.brand}</h3>
            <h2>{product.name}</h2></Link>
          </div>
          );
        })}
      </main>
    </>,
  );
}
