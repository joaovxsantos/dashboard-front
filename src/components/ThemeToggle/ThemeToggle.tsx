import { useState, useEffect } from "react"
import {Sun, Moon} from 'lucide-react'

export function ThemeToggle() {


    const [isDarkMode,  setIsDarkMode] = useState<boolean>(document.body.classList.contains('darkMode'))

    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.remove('darkMode')
        } else {
            document.body.classList.add('darkMode')
        }
    }, [isDarkMode])

    return (
        <>
            <button type="button" onClick={() => setIsDarkMode(prev => !prev)}>
                {isDarkMode? <Sun/> : <Moon/>}
            </button>
        </>
    )
}