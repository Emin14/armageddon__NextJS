'use client'

import { useEffect } from 'react'
import { useAppContext } from '../AppContext'
import Asteroid from '../components/Asteroid'
import Banner from '../components/Banner'
import styles from './page.module.css'


export default function OrdersPage() {

  const {asteroids, setAsteroids} = useAppContext()

  // Для очищения корзины, можно убрать тогда данные корзины при выходе из нее будут не будут очищаться.
  useEffect(() => {
    return () => {
      setAsteroids([])
    }
  }, [])

  return (
    <div className={styles.wrapper}>
        <Banner/>
      <div className={styles.order}>
        <p className={styles.title}>Заказ отправлен</p>
          <Asteroid data={asteroids} basket={true}/>
        <p className={styles.copyright}>© Все права и планета защищены</p>
      </div>
    </div>
  )
}
