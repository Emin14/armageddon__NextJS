import Asteroid from './components/Asteroid'
import Title from './components/Title'
import getAsteroids from './libs/getAsteroids'
import Basket from './components/Basket'
import Banner from './components/Banner'
import LoadMore from './components/Load-more'
import styles from './page.module.css'

export default async function Home() {

  let today = new Date()

  const data = await getAsteroids(today)

  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.flex}>
        <div className={styles.asteroid}>
          <Title />
          <Asteroid data={data} />
          <LoadMore />
        </div>
        <div className={styles.basket}>
          <Basket />
        </div>
      </div>
    </main>
  )
}
