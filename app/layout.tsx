import './globals.css'
import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import { AppProvider } from "./AppContext";
import Header from './components/Header';

const arimo = Arimo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Armageddon 2023',
  description: 'ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={arimo.className}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
