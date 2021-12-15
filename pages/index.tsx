import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <img className= {styles.image} src="me.png" width="700" height="625"></img>
        {/* <Image src={'/me.png'} width={700} height={625} priority={true}/> */}
      <div className={styles.column}>
        <div className={styles.text}>
          <div className={styles.about}>
            <Link href="/about">
              <span className={styles.label}></span>
            </Link>
          </div>
          <div className={styles.projects}>
            <Link href="/projects">
              <span className={styles.label}></span>
            </Link>
          </div>
          <div className={styles.contact}>
            <Link href="/contact">
              <span className={styles.label}></span>
            </Link>
          </div>
        
        </div>
      </div>
    </div>
    
  )
}
