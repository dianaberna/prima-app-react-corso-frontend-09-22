
import React, { useState } from "react";
import Input from "./Input/Input"
import "./Form.css"

export default function Form (){

    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    const handleNameChange = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
    } 
  
    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input tipo="email" etichetta="Email" id="email">mario.rossi@gmail.com</Input>
            componente
            <Input tipo="text" etichetta="Nome" id="nome" value={name} onChange={ handleNameChange } name="testo">Mario</Input>
            standard
            <input type="text" placeholder="Nome" id="nome" onChange={ handleNameChange }/>
            <Input tipo="text" etichetta="Cognome" id="cognome">Rossi</Input>
            <Input tipo="text" etichetta="Username" id="username"></Input>
            <Input tipo="password" etichetta="Password" id="password"></Input>
            <input type="submit" value="submit" />
        </form>
    )
}
