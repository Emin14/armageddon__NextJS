import Image from 'next/image'
import earthImg from '../../../public/planeta_zemlia.svg'
import styles from './banner.module.css'

export default function Banner() {
  return (
    <Image
      src={earthImg}
      className={styles.banner}
      alt="Earth"
      priority
    />
  )
}
