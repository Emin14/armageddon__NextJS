'use client'

import Image from 'next/image';
import Link from 'next/link'
import { format } from 'date-fns'
import ru from "date-fns/locale/ru";
import declineWord from 'decline-word';
import { useAppContext } from '../../AppContext'
import { useEffect, useState } from 'react'
import calcWidth from '../../libs/calcAsteroidImgWidth'
import asteroidImg from '../../../public/asteroid.svg'
import { IAsteroid } from '../../types/data'
import arrowImg from '../../../public/Arrow-1.svg'
import styles from './index.module.css'


export interface props {
  data: IAsteroid[],
  basket?: boolean
}


export default function Asteroid({ data, basket }: props) {

  const { asteroids, setAsteroids, unit } = useAppContext()

  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idAsteroid = (e.target as HTMLButtonElement).getAttribute("data-id");
    let newArray = data.find(item => item.id === idAsteroid);

    if (newArray) {
      const find = asteroids.find(item => item.id === newArray?.id)
      if (!find) {
        setAsteroids([...asteroids, newArray])
      }
      else {
        const newAsteroids = asteroids.filter(item => item.id !== idAsteroid)
        setAsteroids([...newAsteroids])
      }
    }
  }

  // Для красивого отображения разрядов чисел
  let formatter = new Intl.NumberFormat("ru");

  // Сохраняем текущую ширину экрана
  const [width, setWidth] = useState(0)

  // Подписываемся на изменение ширины экрана
  useEffect(() => {
    const innerWidth = window.innerWidth
    setWidth(innerWidth)
    window.addEventListener('resize', (e: UIEvent) => {
      setWidth((e.target as Window).innerWidth);
    })
  }, []);


  return (
    <ul className={styles.list}>
      {data && data.map(el => {
        const date = el.close_approach_data[0].close_approach_date
        const nameAsteroid = el.name
        const diametr = +(el.estimated_diameter.meters.estimated_diameter_min)
        const hazardous = el.is_potentially_hazardous_asteroid
        const distance = el.close_approach_data[0].miss_distance
        const id = el.id

        return (
          <li key={id} className={styles.asteroid}>
            <h5 className={styles.date}>{format(new Date(date), 'd MMM yyyy', { locale: ru })}</h5>
            <div className={styles.asteroidInfo}>
              <p className={styles.distance}><span>{formatter.format(Math.round(+distance[unit]))} </span>
                {unit === 'lunar'
                  ? <>
                    <span>{declineWord(Math.round(+distance[unit]), 'лунн', 'ая', 'ыe', 'ых')}</span> <span>{declineWord(Math.round(+distance[unit]), 'орбит', 'а', 'ы', '')}</span>
                  </>
                  : <span>км</span>
                }
              </p>
                <Image className={styles.arrow} src={arrowImg}   alt="arrow" />
              <div className={styles.image}>
                <Image src={asteroidImg} className={styles.asteroidImg} width={calcWidth(diametr, width)} alt="asteroid" />
              </div>

              <Link className={styles.nameAsteroid} href={`/asteroids/${id}`}>
                <p >{nameAsteroid[0] === '(' ? nameAsteroid.slice(1, -1) : nameAsteroid}</p>
              </Link>
              <p className={styles.diametr}>ø {Math.round(diametr)} м</p>
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
      })
      }
    </ul>
  )
}
