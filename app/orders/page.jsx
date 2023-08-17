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
        <ul>
            {asteroids && asteroids.map(el => {
              return (
                <Asteroid key={el.id} id={el.id} date={el.close_approach_data[0].close_approach_date} distance={el.close_approach_data[0].miss_distance}  nameAsteroid={el.name} diametr={el.estimated_diameter.meters.estimated_diameter_max} hazardous={el.is_potentially_hazardous_asteroid} basket={true}/>
              )
            }
            )
            }
        </ul>
      </div>
      <p className={styles.copyright}>© Все права и планета защищены</p>
    </div>
  )
}
