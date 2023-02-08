import { fruits } from '../../../database/fruits';
import Fruit from './Fruit';

export const dynamic = 'force-dynamic';

export default function FruitPage({ params }) {
  const singleFruit = fruits.find((fruit) => {
    return fruit.name.toLowerCase() === params.fruitName;
  });
  return <Fruit fruit={singleFruit} />;
}
// {JSON.stringify(props)}
