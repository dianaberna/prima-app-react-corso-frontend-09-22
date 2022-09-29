import { useState } from "react"
import {Figlio, FiglioConClick} from "./Figlio"

export function Genitore(){
    console.log("sono nel genitore")
    return (
        <div>
            <h2>Sono il genitore</h2>
            <Figlio saluto="ciao"/>
        </div>
    )
}

export function GenitoreConClick(){
    const [valore, setValore] = useState(1)

    console.log("sono nel genitore con click ")
    const handleClick = (e) =>{
        console.log("stampo variabile= "+e.target.value)
        setValore(e.target.value)
    }

    return (
        <>
            <h2>Sono il genitore CON CLICK</h2>
            <FiglioConClick saluto="ciao" handleClick={handleClick}/>
            <p>valore= {valore}</p>
        </>
    )
}

