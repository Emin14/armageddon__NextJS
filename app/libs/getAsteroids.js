import { addDays, formatISO, compareDesc } from 'date-fns'

export default async function getAsteroids(start) {

    const in7Days = addDays(start, 7)
    const startDate = formatISO(start, { representation: 'date' })
    const endDate = formatISO(in7Days, { representation: 'date' })

    const responce = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`)
    const res = await responce.json()
    console.log(res)
    const data = await res.near_earth_objects
    const asteroidArray = []
  
    while (-1 !== compareDesc(start, in7Days)) {
      const tomorrow2 = formatISO(start, { representation: 'date' })
      start = addDays(start, 1)
      asteroidArray.push(data[tomorrow2])
    }

    return asteroidArray.flat()
  }
  