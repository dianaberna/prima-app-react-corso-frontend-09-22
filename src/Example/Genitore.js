import { useState } from 'react'
import { Figlio, FiglioConClick, FiglioConClick2 } from './Figlio'

export function Genitore() {
  /*     console.log("sono nel genitore") */
  const funzione = () => {
    let prova = 'ciao'
  }
  return (
    <div>
      <h2>Sono il genitore</h2>
      <Figlio saluto="ciao" funzione={funzione} />
    </div>
  )
}

export function GenitoreConClick() {
  const [valore, setValore] = useState(1)

  /*     console.log("sono nel genitore con click ") */
  const handleClick = (e) => {
    /*   console.log("stampo variabile= "+e.target.value) */
    setValore(e.target.value)
  }

  return (
    <>
      <h2>Sono il genitore CON CLICK</h2>
      <FiglioConClick saluto="ciao" handleClick={handleClick} />
      <p>valore= {valore}</p>
    </>
  )
}

export function GenitoreConClick2() {
  const [valore, setValore] = useState(1)

  /*     console.log("sono nel genitore con click ") */
  const handleClick = (variabile) => {
    console.log('stampo variabile= ' + variabile)
    setValore(variabile)
  }

  return (
    <>
      <h2>Sono il genitore CON CLICK 2</h2>
      <FiglioConClick2 saluto="ciao" handleClick={handleClick} />
      <p>valore= {valore}</p>
    </>
  )
}
