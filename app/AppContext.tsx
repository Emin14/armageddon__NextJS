"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IAsteroid } from './types/data'
import { IUserContextType } from './types/data'
import { DistanceType } from './types/data'


const AppContext = createContext<IUserContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {

    const [unit, setUnit] = useState<DistanceType>('lunar')
    const [asteroids, setAsteroids] = useState<IAsteroid[]>([])

    const value = {
        asteroids,
        setAsteroids,
        unit,
        setUnit
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) throw "Used outside of the context"

    return context
}