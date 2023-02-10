import Image from 'next/image';
import { notFound } from 'next/navigation';
import { shop } from '../../../database/shop';
import Item from './Item';
import styles from './page.module.scss';

//we add these if we have no dynamic functions
export const dynamic = 'force-dynamic';

export default function ItemNamePage({ params }) {
  //singleItem is a name, shop the name of the list of things, item is single thing from shop list, that we will use also in Item component like props.item.name, and don't forget to write (props) in the name of component!!
  const singleItem = shop.find((item) => {
    return item.id.toString() === params.itemName;
  });

  if (!singleItem) {
    throw new Error('this action is not allowed');
    // notFound();
  }
  return <Item item={singleItem} />;
}
