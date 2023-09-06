'use client'

import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import { addDays } from 'date-fns'
import Spinner from '../Spinner'
import getAsteroids from "../../libs/getAsteroids";
import Asteroid from "../Asteroid";
import {IAsteroid} from "../../types/data"
import styles from './index.module.css'


// Компонент для отображения новой партии астероидов
export default function LoadMore() {

    const [asteroidsList, setAsteroidsList] = useState<IAsteroid[]>([])
    const [lastStartDate, setLastStartDate] = useState(new Date())
    const { ref, inView } = useInView();

    // Функция для получения очередного массива за следующие 7 дней
    const loadmoreData = async () => {
        const nextDays = addDays(lastStartDate, 8)
        const newProducts = await getAsteroids(nextDays) ?? [];
        setAsteroidsList((prevProducts) => [...prevProducts, ...newProducts])
        setLastStartDate(nextDays)
    }

    //Когда скроллом доходим до div внутри которого компонент Spinner(индикатор загрузки), тогда вызываем функцию loadmoreData
    useEffect(() => {
        if (inView) {
            loadmoreData()
        }
    }, [inView])

    return (
        <>
            <Asteroid data={asteroidsList} />
            <div className={styles.wrapper} ref={ref}>
                <Spinner />
            </div>
        </>
    )
}
