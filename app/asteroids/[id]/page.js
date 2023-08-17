'use client'

import getAsteroid from '../../libs/getAsteroid'
import { Metadata } from 'next'
import styles from './page.module.css'
import Banner from '../../components/Banner/index'

// export async function generateMetada() {
//   const data = await getAsteroid(id)
//   return {
//     title: data.data.name
//   }
// }


export default async function AsteroidPages({params: {id}}) {

  const {data} = await getAsteroid(id)

  
  console.log(data)
  // console.log(id)

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Banner/>
      </div>
      <div>
        <h1><span>Информация по астероиду</span> <span>{data.name}</span></h1>
        <table className={styles.table}>
          <tr>
            <th>Имя</th>
            <th>Значение</th>
          </tr>
          <tr>
            <td>Обозначение астероида</td>
            <td>{data.designation}</td>
          </tr>
          <tr>
            <td>Абсолютная величина h</td>
            <td>{data.absolute_magnitude_h}</td>
          </tr>
          <tr>
            <td>Ориентировочный диаметр в км(min)</td>
            <td>{data.estimated_diameter.kilometers.estimated_diameter_min}</td>
          </tr>
          <tr>
            <td>Ориентировочный диаметр в км(max)</td>
            <td>{data.estimated_diameter.kilometers.estimated_diameter_max}</td>
          </tr>
          <tr>
            <td>Представляет ли опасность</td>
            <td>{data.is_potentially_hazardous_asteroid}</td>
          </tr>
        </table>

        <p>Данные про сближения</p>

          {data.close_approach_data.map(item => (
            <details>
            <summary><span>Дата сближения</span> <span>{item.close_approach_date}</span></summary>
            <ul>
            <li><span>Дата и время максимального сближения с Землей</span> <span>{item.close_approach_date_full}</span></li>
            <li><span>Относительная скорость км/ч</span> <span>{item.relative_velocity.kilometers_per_hour}</span></li>
            <li><span>Расстояние до Земли в км</span> <span>{item.miss_distance.kilometers}</span></li>
            <li><span>Орбитальное тело(вокруг чего летит)</span> <span>{item.orbiting_body}</span></li>
            </ul>
          </details>
        ))}

      </div>
    </div>
  )
}
