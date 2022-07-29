import Head from 'next/head'
import styles from '@/pages/index.module.css'
import { MinimalAppExample } from './MinimalAppExample'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MinimalAppExample />
    </div>
  )
}
