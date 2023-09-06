'use client'

import { useAppContext } from '../../AppContext'
import styles from './index.module.css'


export default function Title() {

  const { unit, setUnit } = useAppContext()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const atribut = (e.target as HTMLButtonElement).getAttribute("data-unit")
    if (atribut === 'kilometers' || atribut === 'lunar') {
      setUnit(atribut)
    }
  }

  return (
    <>
      <h3 className={styles.nearbyAsteroids}>Ближайшие подлёты астероидов</h3>
      <div className={styles.filter}>
        {/* <button onClick={handleClick} data-unit='kilometers' className={`${styles.filter__item} ${unit === 'kilometers' ? styles.active : ''}`}>в километрах</button> */}
        <button onClick={handleClick} data-unit='kilometers' className={`${styles.filter__item} ${unit === 'kilometers' ? styles.active : ''}`}>в километрах</button>
        <span> | </span>
        <button onClick={handleClick} data-unit='lunar' className={`${styles.filter__item} ${unit === 'lunar' ? styles.active : ''}`}>в лунных орбитах</button>
      </div>
    </>
  )
}
