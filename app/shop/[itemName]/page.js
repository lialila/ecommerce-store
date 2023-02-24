import { getItem } from '../../../database/shop';
import Item from './Item';

// we add these if we have no dynamic functions
export const dynamic = 'force-dynamic';

export async function generateMetadata(props) {
  //   const singleItem = await getItem(props.params.itemId)
  //   return {
  //   title: `${singleItem.name}`
  //       },
  //
  return {
    title: 'Chili pepper',
  };
}

export default async function ItemIdPage({ params }) {
  // singleItem is a name, shop the name of the list of things, item is single thing from shop list, that we will use also in Item component like props.item.name, and don't forget to write (props) in the name of component!!
  // const singleItem = shop.find((item) => {
  //   return item.id.toString() === params.itemName;
  // });
  const singleItem = await getItem(params.itemName);

  if (!singleItem) {
    throw new Error('this action is not allowed');
    // notFound();
  }
  return <Item item={singleItem} />;
}
