import styles from "./DocumentCard.module.css";
import Link from "next/link";

export default function DocumentCard({ document }) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{document.title}</h2>

      <p className={styles.description}>{document.description}</p>

      <Link href={`/${document.slug}`} className="button-outline-blue">Meer informatie</Link>
    </article>
  );
}
