import './Header.css'
import ButtonComponents from '../../Button'
import Gatto1 from '../../assets/gatto1.jpeg'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <div>
        <h2>Sono l'header</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adiscing edit. Dolor morbi
          vedit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.
        </p>
        <ButtonComponents type="primary">cliccami</ButtonComponents>
      </div>
      <Logo />
      <img src={Gatto1} alt="cellulare" />
      <div id="bgGatto"></div>
    </header>
  )
}
