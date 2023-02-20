import styles from './page.module.scss';

export const metadata = {
  title: {
    default: 'NINE CIRCLES',
  },
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>HOME</h1>

      <p>
        Chili pepper plants start from seeds. Once a seed has germinated, a
        seedling will grow from it. First, the plant will produce a stem with
        big green leaves. The stem will branch out in two directions, and these
        branches will, in their turn, continue to branch out. At some point,
        flowers will appear. When these flowers have been pollinated, they will
        transform into chili fruits. These fruits can be harvested early when
        they are deep green or harvested at maturity when they have changed into
        their final color. Lately, I have been researching various aspects of
        chili, growing to deepen my knowledge in this area. Before this, I have
        grown chilies indoors for several years, so I have some experience with
        this. Below, I will discuss the chili pepper life cycle in more depth.
      </p>
    </main>
  );
}
