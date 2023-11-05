import Head from "next/head";
import { redirect } from 'next/navigation'
import styles from "./index.module.css";

export default function Home() {

  return (
    <>
      <Head>
        <title>Movelmar</title>
      </Head>
      <main className={styles.main}>
        redirecionando...
      </main>
    </>
  );
}
