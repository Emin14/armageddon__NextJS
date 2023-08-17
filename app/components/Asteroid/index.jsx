'use client'

import { format } from 'date-fns'
import ru from "date-fns/locale/ru";
import { useAppContext } from '../../AppContext'
import declineWord from 'decline-word';
import Link from 'next/link'
import {useState, useEffect} from 'react'
import styles from './asteroid.module.css'

export default function Asteroid({data, id, date, distance, nameAsteroid, diametr, hazardous, basket}) {


  const {asteroids, setAsteroids, unit} = useAppContext()

  const addToBasket = (e) => {
    const idAsteroid = e.target.getAttribute("data-id");
    let newArray = data.flat().filter(item => item.id === idAsteroid);
    [newArray] = [...newArray]
    console.log(asteroids)
    const find = asteroids.find(item => item.id === newArray.id)
    console.log(find)
    if(!find) {
      setAsteroids([...asteroids, newArray])
    }
    if(find) {
      const newAsteroids = asteroids.filter(item => item.id !== idAsteroid)
      setAsteroids([...newAsteroids])
    }

  }

  let formatter = new Intl.NumberFormat("ru");

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    console.log(window.scrollY)
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });





  return (
    <li className={styles.asteroid}>
      <h5 className={styles.date}>{format(new Date(date), 'd MMM yyyy', { locale: ru })}</h5>
      
      <div className={styles.asteroidInfo}>
        <div className={styles.info} >
          <p><span>{ formatter.format(Math.round(distance[unit]))} </span> 
          {unit === 'lunar' 
          ? <>
          <span>{declineWord((distance[unit]), 'лунн', 'ая', 'ыe', 'ых')}</span> <span>{declineWord((distance[unit]), 'орбит', 'а', 'ы', '')}</span>
          </>
          : <span>км</span>
          }
          </p>
          <img className={styles.arrow} src="./Arrow1.svg" alt="" />
        </div>
        <img src="./asteroid.svg" alt="" className={+diametr < 100 ? styles.small : +diametr < 500 ? styles.average : +diametr < 1000 ? styles.large : styles.veryLarge} />
          <Link href={`/asteroids/${id}`}>
            <p className={styles.nameAsteroid}>{nameAsteroid[0] === '(' ? nameAsteroid.slice(1, -1) : nameAsteroid}</p>
            <p className={styles.diametr}>ø {Math.round(diametr)} м</p>
          </Link>
      </div>
      <div className={styles.order}>
        {!basket
        ? <button className={styles.orderBtn} onClick={addToBasket} data-id={id}>{asteroids.find(item => item.id === id) ? "В корзине" : 'Заказать'}</button>
        : ''
        }
        <p className={styles.danger}>{hazardous ? '⚠️ Опасен' : ''}</p>
      </div>
    </li>
  )
}
