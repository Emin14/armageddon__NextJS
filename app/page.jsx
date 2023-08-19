import styles from './page.module.css'
import Asteroid from './components/Asteroid'
import Approaches from './components/Approaches'
import getAsteroids from './libs/getAsteroids'
import Basket from './components/Basket'
import Banner from './components/Banner'
import LoadMore from './components/Load-more/Load-more'
import Test from './components/Test'


export default async function Home() {

  let today = new Date()

  const data = await getAsteroids(today)

  // console.log(data)

  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <Banner />
      </div>
      <Approaches>
        <Asteroid data={data} />
        <LoadMore />
      </Approaches>
      <div className={styles.basket}>
        <Basket data={data} />
      </div>
      <Test />
    </main>
  )
}
