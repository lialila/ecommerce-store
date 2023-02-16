import './global.scss';
import {
  Alternates,
  Cutive_Mono,
  Monoton,
  Montserrat,
  Mr_Dafoe,
  Mrs_Saint_Delafield,
  Questrial,
} from '@next/font/google';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';
import TotalAmount from './TotalAmount';

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <head />
      <body className={styles.body}>
        <CookieBanner />
        <h1 className={styles.h1}>NINE CIRCLES</h1>
        <header className={styles.header}>
          <nav>
            <div className={styles.left}>
              <button>
                <Link href="/">HOME</Link>
              </button>
              <button>
                <Link href="/shop">SHOP</Link>
              </button>
            </div>
            <div className={styles.right}>
              {/* <Link href="/cart">
                <button> YOUR CART</button>
              </Link> */}

              <button>
                <Link href="/contact">CONTACT</Link>
              </button>
            </div>
            <div>
              <TotalAmount />
            </div>
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
