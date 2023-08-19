'use client'
import { useAppContext } from '../AppContext'
import Asteroid from '../components/Asteroid'
import Banner from '../components/Banner'
import styles from './page.module.css'


export default function Orders() {

  const {asteroids} = useAppContext()

  return (
    <div className={styles.wrapper}>
      <Banner/>
      <div className={styles.order}>
        <p className={styles.title}>Заказ отправлен</p>
          <Asteroid data={asteroids} basket={true}/>
      </div>
      <p className={styles.copyright}>© Все права и планета защищены</p>
    </div>
  )
}
