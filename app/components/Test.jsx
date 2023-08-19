'use client'

import React from 'react'
import getAsteroids from '../libs/getAsteroids'

export default async function Test() {

    let today = new Date()

    const data = await getAsteroids(today)

  return (
    <div>Test</div>
  )
}


// interface Asteroids {
//   close_approach_date: string,
//   close_approach_date_full: string,
//   relative_velocity: {kilometers_per_hour: string}
//   miss_distance: {kilometers: string}
//   orbiting_body: string
// }




// [
//     [
//         {
//             "links": {
//                 "self": "http://api.nasa.gov/neo/rest/v1/neo/2152563?api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR"
//             },
//             "id": "2152563",
//             "neo_reference_id": "2152563",
//             "name": "152563 (1992 BF)",
//             "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2152563",
//             "absolute_magnitude_h": 19.81,
//             "estimated_diameter": {
//                 "kilometers": {
//                     "estimated_diameter_min": 0.2901048414,
//                     "estimated_diameter_max": 0.648694146
//                 },
//                 "meters": {
//                     "estimated_diameter_min": 290.1048414281,
//                     "estimated_diameter_max": 648.694146035
//                 },
//                 "miles": {
//                     "estimated_diameter_min": 0.1802627354,
//                     "estimated_diameter_max": 0.4030797302
//                 },
//                 "feet": {
//                     "estimated_diameter_min": 951.7875679509,
//                     "estimated_diameter_max": 2128.2617020774
//                 }
//             },
//             "is_potentially_hazardous_asteroid": false,
//             "close_approach_data": [
//                 {
//                     "close_approach_date": "2023-08-18",
//                     "close_approach_date_full": "2023-Aug-18 20:04",
//                     "epoch_date_close_approach": 1692389040000,
//                     "relative_velocity": {
//                         "kilometers_per_second": "11.3663001979",
//                         "kilometers_per_hour": "40918.6807122708",
//                         "miles_per_hour": "25425.2769125774"
//                     },
//                     "miss_distance": {
//                         "astronomical": "0.3281621012",
//                         "lunar": "127.6550573668",
//                         "kilometers": "49092351.354244444",
//                         "miles": "30504572.6156995672"
//                     },
//                     "orbiting_body": "Earth"
//                 }
//             ],
//             "is_sentry_object": false
//         }
//     ],
//     [
//         {
//             "links": {
//                 "self": "http://api.nasa.gov/neo/rest/v1/neo/3384400?api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR"
//             },
//             "id": "3384400",
//             "neo_reference_id": "3384400",
//             "name": "(2007 RO17)",
//             "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3384400",
//             "absolute_magnitude_h": 25.8,
//             "estimated_diameter": {
//                 "kilometers": {
//                     "estimated_diameter_min": 0.0183888672,
//                     "estimated_diameter_max": 0.0411187571
//                 },
//                 "meters": {
//                     "estimated_diameter_min": 18.388867207,
//                     "estimated_diameter_max": 41.1187571041
//                 },
//                 "miles": {
//                     "estimated_diameter_min": 0.0114263088,
//                     "estimated_diameter_max": 0.0255500032
//                 },
//                 "feet": {
//                     "estimated_diameter_min": 60.3309310875,
//                     "estimated_diameter_max": 134.9040630575
//                 }
//             },
//             "is_potentially_hazardous_asteroid": false,
//             "close_approach_data": [
//                 {
//                     "close_approach_date": "2023-08-19",
//                     "close_approach_date_full": "2023-Aug-19 03:06",
//                     "epoch_date_close_approach": 1692414360000,
//                     "relative_velocity": {
//                         "kilometers_per_second": "14.1390891636",
//                         "kilometers_per_hour": "50900.7209890025",
//                         "miles_per_hour": "31627.7285500832"
//                     },
//                     "miss_distance": {
//                         "astronomical": "0.287069504",
//                         "lunar": "111.670037056",
//                         "kilometers": "42944986.34035648",
//                         "miles": "26684777.122340224"
//                     },
//                     "orbiting_body": "Earth"
//                 }
//             ],
//             "is_sentry_object": false
//         }
//     ],
// ]