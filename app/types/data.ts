export interface IAsteroid {
  close_approach_data: Array<IcloseApproachData>,
  estimated_diameter: {
    meters: {
      estimated_diameter_min: number,
      estimated_diameter_max: number,
    },
  },
  id: string,
  is_potentially_hazardous_asteroid: boolean,
  name: string
}

export interface IcloseApproachData {
  close_approach_date: string,
  close_approach_date_full: string,
  epoch_date_close_approach: number,
  relative_velocity: {
      kilometers_per_hour: string
  },
  miss_distance: {
      lunar: string,
      kilometers: string,
  },
  orbiting_body: string
  }
  

export interface IAsteroidPage extends IAsteroid{
  designation: string,
  absolute_magnitude_h: number
}

export interface IUserContextType {
  unit: DistanceType
  setUnit: React.Dispatch<React.SetStateAction<DistanceType>>
  asteroids: IAsteroid[]
  setAsteroids: React.Dispatch<React.SetStateAction<IAsteroid[]>>
};

export type DistanceType = 'kilometers' | 'lunar';