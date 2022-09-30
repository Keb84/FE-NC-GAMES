import { createContext } from "react";
import {useState} from 'react'

export const ThemeContext = createContext(null)

export const ThemeProvider = (props) => {
    const [themeMode, setThemeMode]= useState('light')
return <ThemeContext.Provider value={{themeMode, setThemeMode}}>
    {props.children}
</ThemeContext.Provider>
}