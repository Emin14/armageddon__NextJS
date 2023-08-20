'use client'
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import { addDays } from 'date-fns'
import Spinner from '../Spinner'
import getAsteroids from "../../libs/getAsteroids";
import Asteroid from "../Asteroid";
import styles from './load-more.module.css'

// Компонент для отображения новой партии астероидов
export default function LoadMore() {

    const [asteroids, SetAsteroids] = useState([])
    const [lastStartDate, setLastStartDate] = useState(new Date())
    const { ref, inView } = useInView();

    // Функция для получения очередного массива за следующие 7 дней
    const loadmoreData = async () => {
        const next7days = addDays(lastStartDate, 7)
        const newProducts = await getAsteroids(next7days) ?? [];
        SetAsteroids((prevProducts) => [...prevProducts, ...newProducts])
        setLastStartDate(next7days)
    }

    //Когда скроллом доходим до div внутри которого компонент Spinner(индикатор загрузки), тогда вызываем функцию loadmoreData
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
