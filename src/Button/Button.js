import "./Button.css"

const Button = (props) => {
    return (
        <button className={props.variante}>{props.children}</button>
    )
}

export default Button;