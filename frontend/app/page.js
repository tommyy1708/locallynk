import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>home page</h1>
      <Link href="/about">Go to about</Link>
      <Link href="/login">Go to login</Link>
    </main>
  );
}
