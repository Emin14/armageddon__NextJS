import Image from 'next/image';
import { Metadata } from 'next';
import getAsteroid from '../../libs/getAsteroid'
import Banner from '../../components/Banner/index'
import asteroidImg from '../../../public/asteroid.svg'
import calcWidth from '../../libs/calcAsteroidImgWidth'
import styles from './page.module.css'


// Динамически генерируем title страницы, по желанию можно и description добавить
export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {

  const data = await getAsteroid(id)

    return {
      title: `Информация по астероиду '${data.designation}'`
    }
}


export default async function AsteroidPages({ params: { id } }: { params: { id: string } }) {

  const data = await getAsteroid(id)


  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.info}>
        <h1 className={styles.title}><span>Информация по астероиду</span> <span>{data.name}:</span></h1>
        <div className={styles.tableAndImage}>
          <table className={styles.table}>
            <tbody>
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
                <td>Ориентировочный диаметр в м (мин)</td>
                <td>{Math.round(Number(data.estimated_diameter.meters.estimated_diameter_min))}</td>
              </tr>
              <tr>
                <td>Ориентировочный диаметр в м (макс)</td>
                <td>{Math.round(Number(data.estimated_diameter.meters.estimated_diameter_max))}</td>
              </tr>
              <tr>
                <td>Представляет ли опасность</td>
                <td>{data.is_potentially_hazardous_asteroid ? "Да" : 'Нет'}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.asteroidImg}>
            <Image src={asteroidImg} width={2 * calcWidth(data.estimated_diameter.meters.estimated_diameter_max)} alt="asteroid" />
          </div>
        </div>
        <p className={styles.approachInfo}>Сближения в этом году:</p>
        {data.close_approach_data.filter(el => new Date(el.close_approach_date).getFullYear() === new Date().getFullYear()).map(item => (
          <details key={item.close_approach_date + 'current'} className={`${styles.details} ${styles.today}`}>
            <summary><span>Дата сближения</span> <span>{item.close_approach_date}</span></summary>
            <table className={styles.approachTable}>
              <tbody>
                <tr>
                  <td>Дата и время максимального сближения с Землей</td>
                  <td>{item.close_approach_date_full}</td>
                </tr>
                <tr>
                  <td>Относительная скорость км/ч</td>
                  <td>{Math.round(Number(item.relative_velocity.kilometers_per_hour))}</td>
                </tr>
                <tr>
                  <td>Расстояние до Земли в км</td>
                  <td>{Math.round(Number(item.miss_distance.kilometers))}</td>
                </tr>
                <tr>
                  <td>Орбитальное тело(вокруг чего летит)</td>
                  <td>{item.orbiting_body === 'Earth' ? "Земля" : item.orbiting_body === 'Mars' ? "Марс" : item.orbiting_body === 'Venus' ? "Венера" : "Не успел прописать"}</td>
                </tr>
              </tbody>
            </table>
          </details>
        ))}
        <p className={styles.approachInfo}>Данные про все сближения:</p>
        {data.close_approach_data.map(item => (
          <details key={item.close_approach_date} className={styles.details}>
            <summary><span>Дата сближения</span> <span>{item.close_approach_date}</span></summary>
            <table className={styles.approachTable}>
              <tbody>
                <tr>
                  <td>Дата и время максимального сближения с Землей</td>
                  <td>{item.close_approach_date_full}</td>
                </tr>
                <tr>
                  <td>Относительная скорость км/ч</td>
                  <td>{Math.round(Number(item.relative_velocity.kilometers_per_hour))}</td>
                </tr>
                <tr>
                  <td>Расстояние до Земли в км</td>
                  <td>{Math.round(Number(item.miss_distance.kilometers))}</td>
                </tr>
                <tr>
                  <td>Орбитальное тело(вокруг чего летит)</td>
                  <td>{item.orbiting_body === 'Earth' ? "Земля" : item.orbiting_body === 'Mars' ? "Марс" : item.orbiting_body === 'Venus' ? "Венера" : "Не успел прописать"}</td>
                </tr>
              </tbody>
            </table>
          </details>
        ))}
      </div>
    </div>
  )
}
