export const Button = ({ title, variant, handle }) => {

    return (
        <button className={variant ? variant : "btn-secondary"} onClick={handle}>
            {title ? title : "Sin texto"}
        </button>
    )
}

export default Button