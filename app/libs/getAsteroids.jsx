import { addDays, formatISO, compareDesc } from 'date-fns'
import axios from 'axios';
import { useAppContext } from '../AppContext'

export default async function getAsteroids(start) {

    const in7Days = addDays(start, 7)
    const todayISO = formatISO(start, { representation: 'date' })
    const in7DaysISO = formatISO(in7Days, { representation: 'date' })

  
    const responce = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayISO}&end_date=${in7DaysISO}&api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`)
    const res = await responce.data.near_earth_objects
    const asteroidArray = []
  
    while (-1 !== compareDesc(start, in7Days)) {
      const tomorrow2 = formatISO(start, { representation: 'date' })
      start = addDays(start, 1)
      asteroidArray.push(res[tomorrow2])
    }

    return asteroidArray
  }
  