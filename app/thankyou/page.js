import styles from './page.module.scss';

export const metadata = {
  title: {
    default: 'THANK YOU!',
  },
};

export default function ThankYouPage() {
  return (
    <main className={styles.main}>
      <h3> Thank you for your order!</h3>
    </main>
  );
}
