'use client'

import { useAppContext } from '../../AppContext'
import declineWord from 'decline-word';
import { useRouter } from 'next/navigation'
import styles from './basket.module.css'

export default function Basket() {

  const {asteroids} = useAppContext()

  // console.log(asteroids)

  const router = useRouter()

  const handleClick = () => {
    router.push('/orders')
  } 

  return (
    <div className={styles.basket}>
        <div>
          <p className={styles.basketTitle}>Корзина</p>
          <p className={styles.basketCount}><span>{asteroids.length}</span> <span>{declineWord(asteroids.length, 'астероид', '', 'а', 'ов')}</span> </p>
        </div>
        <button className={styles.send} onClick={handleClick}>Отправить</button>
    </div>
  )
}
