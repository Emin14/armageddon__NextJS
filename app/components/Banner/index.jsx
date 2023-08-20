import Image from 'next/image'
import earthImg from '../../../public/planeta_zemlia.svg'
import styles from './banner.module.css'

// Компонент вывода баннера с изображением Земли
export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
      src={earthImg}
      className={styles.image}
      alt="Earth"
      priority
      />
    </div>

  )
}
