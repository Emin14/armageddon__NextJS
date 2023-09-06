import { addDays, formatISO, compareDesc } from 'date-fns'
import { IAsteroid } from '../types/data'

export default async function getAsteroids(start: Date): Promise<IAsteroid[]> {

  const in7Days = addDays(start, 7)
  const startDate = formatISO(start, { representation: 'date' })
  const endDate = formatISO(in7Days, { representation: 'date' })
  
  const responce = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`, {
    cache: 'no-store'
  })

  const res = await responce.json()
  const data = await res.near_earth_objects
  
  // Создаю пустой массив и в него пушу объект свойство которого это определенный день, а значения это массив астероидов за этот день
  // И так прохожу циклом пока сегодняшняя дата и дата через 7 дней не сравняются
  const asteroidArray = []
  let today = start;
  while (-1 !== compareDesc(today, in7Days)) {
    const todayISO = formatISO(today, { representation: 'date' })
    asteroidArray.push(data[todayISO])
    today = addDays(today, 1)
  }
  
  if (!responce.ok) {
    throw new Error(`Неудалось загрузить астероиды`);
  }

  // В итоге получился массив массивов и с помощью flat поднимаю массивы на верхний уровень и  все это возвращаю
  return asteroidArray.flat()

}
