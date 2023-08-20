import Link from 'next/link'
import styles from './header.module.css'

// Компонент отображения шапки сайта
export default function Header() {

  return (
    <header  className={styles.wrapper}>
      <Link href={'/'}><h1 className={styles.title}>ARMAGEDDON 2023</h1></Link>
      <p className={styles.subtitle}>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
    </header>
  )
}
