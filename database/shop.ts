import { cache } from 'react';
// import fs from 'node:fs';
import { sql } from './connect';

// export const shop1 = [
//   {
//     id: 1,
//     name: 'Carolina Reaper',
//     type: 'carolinareaper',
//     price: 9,
//     shu: 'Scoville scale: 1,800,000',
//     description:
//       'The Carolina Reaper is a cultivar of the Capsicum chinense plant. Developed by American breeder Ed Currie, the pepper is red and gnarled, with a bumpy texture and small pointed tail. In 2017, Guinness World Records declared it the hottest chili pepper in the world',
//   },
//   {
//     id: 2,
//     name: 'Habanero Golden',
//     type: 'habanero',
//     price: 5,
//     shu: 'Scoville scale: 300,000',
//     description:
//       'The habanero chili comes from the Amazon, from which it was spread, reaching Mexico.  Today, the largest producer of the habanero pepper is the Yucatán Peninsula, in Mexico. Habaneros are an integral part of Yucatecan food, accompanying most dishes, either in natural form or purée or salsa.',
//   },
//   {
//     id: 3,
//     name: 'Apocalypse Scorpion Chocolate',
//     type: 'apocalypse',
//     price: 7,
//     shu: 'Scoville scale: 2,000,000',
//     description:
//       'The Apocalypse Scorpion pepper is an Italian super-hot scorpion-type chili whose heat has been recorded at levels rivaling the Carolina Reaper.',
//   },
//   {
//     id: 4,
//     name: 'Trinidad Moruga scorpion',
//     type: 'trinidad',
//     price: 5,
//     shu: 'Scoville scale: 1,200,000',
//     description:
//       'The yellow cultivar of the Trinidad Moruga Scorpion was created by Wahid Ogeer of Trinidad. Aside from the heat, the Trinidad Moruga scorpion has a tender fruit-like flavor, which makes it a sweet-hot combination.',
//   },
//   {
//     id: 5,
//     name: 'Ghost Peach',
//     type: 'ghost',
//     price: 4,
//     shu: 'Scoville scale: 1,000,000',
//     description:
//       'The ghost pepper, also known as bhut jolokia, is a chili pepper grown in Northeast India. Guinness World Records said it was the hottest pepper in the world in 2007.  It was passed by three hotter chillis during 2011.',
//   },
//   {
//     id: 6,
//     name: 'Jalapeño',
//     type: 'jalapenho',
//     price: 6,
//     shu: 'Scoville scale: 4,000 - 8,500',
//     description:
//       'Jalapeños were in use by the Aztecs prior to the Spanish conquest. The use of peppers in the Americas dates back thousands of years, including the practice of smoking some varieties of peppers in order to preserve them.',
//   },
// ];

type Item = {
  id: number;
  name: string;
  type: string;
  price: string;
  shu: string | null;
  description: string | null;
};
//get all items in shop

export const getShop = cache(async () => {
  const shop = await sql<Item[]>`
SELECT * FROM shop
  `;
  return shop;
});

//get a single item

export const getItem = cache(async (id: number) => {
  const [item] = await sql<Item[]>`
  SELECT * FROM shop
  WHERE id = ${id}
  `;
  return item;
});
