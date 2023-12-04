import Image from 'next/image'
import styles from './page.module.css'
import Hero from "./Components/Hero/Hero"
import About from './Components/About/About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
    </main>
  )
}
