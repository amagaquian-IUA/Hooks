import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme';

export const Button = ({ title, variant, handle }) => {

    const { theme } = useContext(ThemeContext)
    return (
        <button className={variant ? variant : "btn-secondary"} onClick={handle}>
            {title ? title : "Sin texto"} - {theme}
        </button>
    )
}

export default Button