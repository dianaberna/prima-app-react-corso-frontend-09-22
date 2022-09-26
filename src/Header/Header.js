import "./Header.css"
import ButtonComponent from '../Button'
import Phone from '../assets/phone.png'
import {ReactComponent as Logo} from '../assets/logo.svg'

export default function Header(){
    return(
        <header>
            <div>
                <Logo />
                <h1>Titolo</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adiscing edit. Dolor
                    morbi vedit turpis et dolor sit morbi odio id. Aliquam ultricies
                    tortor ac.
                </p>
                <ButtonComponent type="primary">cliccami</ButtonComponent>
            </div>
            <img src={Phone} alt="cellulare" />
        </header>
    )
}

