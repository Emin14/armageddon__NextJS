export default async function getAsteroid(id) {
    const responce = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`)
    
    return responce.json()
}
