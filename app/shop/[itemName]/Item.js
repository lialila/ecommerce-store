'use client';

import Image from 'next/image';

// import styles from './page.module.scss';

export default function Item(props) {
  return (
    <>
      <Image
        src={`/images/${props.item.type}-${props.item.id}.jpg`}
        alt={props.item.type}
        width="160"
        height="160"
      />
      <h1>{props.item.name}</h1>
      <div>{props.item.description}</div>
      <div>{props.item.shu}</div>
      <div>10 seeds {props.item.price}</div>
      <div>
        <button>-</button>
        <button>+</button>

        <button>Add to card</button>
      </div>
    </>
  );
}
