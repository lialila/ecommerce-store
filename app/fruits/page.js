import Link from 'next/link';
import { fruits } from '../../database/fruits';

export const dynamic = 'force-dynamic';

export default function ItemsAge(props) {
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            <Link href={`/fruits/${fruit.name.toLowerCase()}`}>
              {' '}
              <h2>{fruit.name}</h2>
            </Link>
            <p>This is your chosen fruit</p>
          </div>
        );
      })}
    </div>
  );
}
