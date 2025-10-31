import Link from 'next/link'
import styles from "./Footer.module.css";

export default function Nav() {
  return <footer className={styles.footer}>
        <p>Dit is de footer</p>

        <Link href="/" className={styles.a}>Test menu item</Link>
        <Link href="/" className={styles.a}>Test menu item</Link>
        <Link href="/" className={styles.a}>Test menu item</Link>
  </footer>
}