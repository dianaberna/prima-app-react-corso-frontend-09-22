import "./Button.css"

const Button = (props) => {
    return (
        <button className={props.type}>{props.children}</button>
    )
}

export default Button;