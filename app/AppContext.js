"use client"
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [unit, setUnit] = useState('lunar')
    const [asteroids, setAsteroids] = useState([])
    const [allAsteroids, setAllsteroids] = useState([])

    const value = {
     asteroids,
     setAsteroids,
     unit, 
     setUnit,
    };
 
    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}
 

 export const useAppContext=()=> useContext(AppContext)