import Link from 'next/link'
import styles from "./Nav.module.css";

export default function Nav() {
  return <nav className={styles.nav}>
        <Link href="/" className={styles.first}>Dit is de header</Link>
        <div className={styles.links}>
            <Link href="/" className={styles.a}>Test menu item</Link>
            <Link href="/" className={styles.a}>Test menu item</Link>
        </div>
        
  </nav>
}