'use client'
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import { addDays } from 'date-fns'
import Spinner from '../Spinner/spinner'
import getAsteroids from "../../libs/getAsteroids";
import Asteroid from "../Asteroid";
import styles from './load-more.module.css'


export default function loadMore() {

    const [asteroids, SetAsteroids] = useState([])
    const [lastStartDate, setLastStartDate] = useState(new Date())
    const { ref, inView } = useInView();

    const loadmoreData = async () => {
        const next7days = addDays(lastStartDate, 7)
        const newProducts = await getAsteroids(next7days) ?? [];
        SetAsteroids((prevProducts) => [...prevProducts, ...newProducts])
        setLastStartDate(next7days)
    }

    useEffect(() => {
        if (inView) {
            loadmoreData()
        }
    }, [inView])

    return (
        <>
            <Asteroid data={asteroids} />
            <div className={styles.wrapper} ref={ref}>
                <Spinner />
            </div>
        </>
    )
}
