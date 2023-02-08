import './global.scss';
import { Alternates, Montserrat, Questrial } from '@next/font/google';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <head />
      <body className={styles.body}>
        <CookieBanner />
        <h1 className={styles.h1}>NINE CIRCLES</h1>
        <header className={styles.header}>
          <nav>
            <Link href="/">HOME</Link>
            <Link href="/concept">CONCEPT</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/shop">SHOP</Link>
            <Link href="/fruits">FRUITS</Link>
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
