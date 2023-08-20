'use client'

import { useAppContext } from '../../AppContext'
import styles from './approaches.module.css'

// Компонент вывода блока на главной странице: фильтра и всех астероидов (children)
export default function Approaches({children}) {

    const {unit, setUnit } = useAppContext()

    const handleClick = (e) => {
      setUnit(e.target.getAttribute("data-unit"))
    }


  return (
    <section className={styles.asteroid}>
        <h3 className={styles.nearbyAsteroids}>Ближайшие подлёты астероидов</h3>
        <div className={styles.filter}>
          <span onClick={handleClick} data-unit='kilometers' className={`${styles.filter__item} ${unit === 'kilometers' ? styles.active : ''}`}>в километрах</span>
          <span> | </span>
          <span onClick={handleClick} data-unit='lunar' className={`${styles.filter__item} ${unit === 'lunar' ? styles.active : ''}`} >в лунных орбитах</span>
        </div>
        {children}
    </section>
  )
}
