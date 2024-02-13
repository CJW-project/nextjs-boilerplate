'use client'

import styles from './page.module.css'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  function goToRecotilTestPage() {
    router.push('/recoiltest');
  }

  return (
    <main className={styles.main}>
      <div>
        <p> boilerplate initial set </p>
        <p> Go to Recoil Test : <Button onClick={goToRecotilTestPage}> go </Button> </p>
      </div>
    </main>
  )
}
