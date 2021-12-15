import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={'/me.svg'} width={700} height={625}/>
      </div>
      <div className={styles.column}>
        <div className={styles.text}>
          <div className={styles.about}>
            <Link href="/About">
              <span className={styles.label}></span>
            </Link>
          </div>
          <div className={styles.projects}>
            <Link href="/Projects">
              <span className={styles.label}></span>
            </Link>
          </div>
          <div className={styles.contact}>
            <Link href="/Contact">
              <span className={styles.label}></span>
            </Link>
          </div>
        
        </div>
      </div>
    </div>
    
  )
}
