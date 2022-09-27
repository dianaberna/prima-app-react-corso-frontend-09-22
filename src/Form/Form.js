
import React, { useState } from "react";
import Input from "./Input/Input"
import "./Form.css"

export default function Form (){

    const [name, setName] = useState("");
    const [testo, setTesto] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    const handleNameChange = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
        setTesto("ciao sono il testo di"+e.target.value)
    } 
  
    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input tipo="email" etichetta="Email" id="email">mario.rossi@gmail.com</Input>
            <Input tipo="text" etichetta="Nome" id="nome" value={name} onChange={ handleNameChange } name="testo">Mario</Input>
            <Input tipo="text" etichetta="Cognome" id="cognome" value={testo}/>
            <Input tipo="text" etichetta="prova" id="prova" value={testo}/>
            <input type="submit" value="submit" />
        </form>
    )
}
