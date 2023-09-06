import { IAsteroidPage } from '../types/data'

export default async function getAsteroid(id: string): Promise<IAsteroidPage> {
  const responce = await fetch(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=JtFbnujI7bc8GTA0D30T4rYTkndelv2NeNty4EPR`
  );

  if (!responce.ok) {
    throw new Error(`Не удалось загрузить данные по астероиду ${id}`);
  }

  return responce.json();
}
