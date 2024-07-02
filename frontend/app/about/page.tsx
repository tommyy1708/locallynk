import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function page() {
  return <>
  <main className={styles.main}>
    <h1>about page</h1>
    <Link href="/">Go to about</Link>
  </main>;
  </>
}
