import './global.scss';
import { Alternates, Montserrat, Questrial } from '@next/font/google';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <head />
      <body className={styles.body}>
        <header className={styles.header}>
          {/* <h1 className={styles.h1}>HOMAGE TO THE NATURE</h1> */}
          <nav>
            <Link href="/">HOME</Link>
            <Link href="/concept">CONCEPT</Link>
            {/* <Link href="/shop/hiking">h i k i n g</Link>
            <Link href="/shop/climbing">c l i m b i n g</Link> */}
            <Link href="/contact">CONTACT</Link>
            <Link href="/shop">SHOP</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          COPYRIGHT ULIANA CHEKLINA 2023
        </footer>
      </body>
    </html>
  );
}
