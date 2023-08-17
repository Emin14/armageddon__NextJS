'use client'
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import Spinner from './spinner'
import getAsteroids from "../libs/getAsteroids";
import Asteroid from "./Asteroid";
import { addDays} from 'date-fns'

export default function loadMore() {

    const [asteroids, SetAsteroids] = useState([])
    const[lastStartDate, setLastStartDate] = useState(new Date())
    const {ref, inView} = useInView();

    const loadmoreData = async() => {
    // await delay(2000)
    const next7days = addDays(lastStartDate, 7)
    const newProducts = await getAsteroids(next7days) ?? [];
    SetAsteroids((prevProducts) => [...prevProducts, ...newProducts])
    console.log(asteroids)
    setLastStartDate(next7days)
    }

    useEffect(() => {
        if(inView) {
            console.log('scrolled to end')
            loadmoreData()
        }
    }, [inView])

    return (
        <>
        <Asteroid data = {asteroids}/>
        <div className="flex justify-center items-center p-4 col-span-1 sm: col-span md: col-span-3" ref={ref}>
            <Spinner />
        </div>
        </>
    )
}
