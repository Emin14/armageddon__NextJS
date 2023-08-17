import { addDays, formatISO, compareDesc } from 'date-fns'
import axios from 'axios';

export default async function getAsteroids() {

    const todayISO = formatISO(new Date(), { representation: 'date' })
    const in7DaysISO = formatISO(addDays(new Date(), 7), { representation: 'date' })
    let today = (new Date())
    const in7Days = addDays(new Date(), 7)
  
  
    const responce = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayISO}&end_date=${in7DaysISO}&api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`)
    const res = await responce.data.near_earth_objects
    const asteroidArray = []
  
    while (-1 !== compareDesc(today, in7Days)) {
      const tomorrow2 = formatISO(today, { representation: 'date' })
      today = addDays(today, 1)
      asteroidArray.push(res[tomorrow2])
    }
  
    return asteroidArray
  }
  