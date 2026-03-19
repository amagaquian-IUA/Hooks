import { createContext, useState } from "react";

// 1- Crear e inicializar el contexto
export const ThemeContext = createContext()


// 2- Crear y configurar el Proveedor (Provider)
// El provider es un componente
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('oscuro')

    const handlerTheme = () => {
        const newTheme = theme === 'claro' ? 'oscuro' : 'claro'
        setTheme(newTheme)

        //setTheme((prevTheme) => (prevTheme === 'claro' ? 'oscuro' : 'claro'))
    }

    const showTheme = () => {
        alert(theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, handlerTheme, showTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}