import "./Button.css"
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={props.variante}>{props.children}</button>
    )
}

Button.propTypes = {
    variante : PropTypes.string,
    children : PropTypes.string,
}

export default Button;