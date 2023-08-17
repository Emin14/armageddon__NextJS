import axios from 'axios';

export default async function getAsteroid(id) {
    const responce = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`)
    return responce
}
