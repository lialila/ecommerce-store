import './global.scss';
import { Alternates, Montserrat, Questrial } from '@next/font/google';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={styles.body}>
        <header className={styles.header}>
          <h1 className={styles.h1}>H o m a g e to the nature</h1>
          <nav>
            <Link href="/">h o m e</Link>
            <Link href="/concept">c o n c e p t</Link>
            {/* <Link href="/shop/hiking">h i k i n g</Link>
            <Link href="/shop/climbing">c l i m b i n g</Link> */}
            <Link href="/contact">c o n t a c t </Link>
            <Link href="/shop">
              <br />
              <button>v i s i t &nbsp;o u r &nbsp;s h o p</button>
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          Copyright Uliana Cheklina 2023
        </footer>
      </body>
    </html>
  );
}
