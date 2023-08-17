import styles from './page.module.css'
import Asteroid from './components/Asteroid'
import Approaches from './components/Approaches'
import getAsteroids from './libs/getAsteroids'
import Basket from './components/Basket'
import Banner from './components/Banner'


export default async function Home() {

  const data = await getAsteroids()

  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <Banner />
      </div>
      <Approaches>
            <ul>
              {data && data.map(item => item.map(el => {
                return (
                  <Asteroid key={el.id} data={data} id={el.id} date={el.close_approach_data[0].close_approach_date} distance={el.close_approach_data[0].miss_distance}  nameAsteroid={el.name} diametr={el.estimated_diameter.meters.estimated_diameter_max} hazardous={el.is_potentially_hazardous_asteroid}/>
                )
                }))
              }
            </ul>
          </Approaches>
          <div className={styles.basket}>
            <Basket data={data} />
          </div>
    </main>
  )
}
