
import React, { useState } from "react";
import Input from "../Input/Input"
import "./Form.css"

export default function Form (){

/*     let form = [{
        tipo: "email",
        etichetta: "Email",
        id: "email1",
        placeholder: "mario.rossi@gmail.com"
    },
    {
        tipo: "email",
        etichetta: "Email",
        id: "email2",
        placeholder: "mario.rossi@gmail.com"
    }] */

    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    const handleNameChange = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    } 
  
    return (
        <form className="form" onSubmit={handleSubmit}>
            {/* {form.map(input => <Input key={input.id} tipo={input.tipo} etichetta={input.etichetta} id={input.id}>{input.placeholder}</Input>)} */}
            <Input tipo="email" etichetta="Email" id="email">mario.rossi@gmail.com</Input>
            <Input tipo="text" etichetta="Nome" id="nome" value={name} onChange={ handleNameChange } name="testo">Mario</Input>
            {/* <input type="text" name="nome" value={name} onChange={handleNameChange} /> */}
            <Input tipo="text" etichetta="Cognome" id="cognome">Rossi</Input>
            <Input tipo="text" etichetta="Username" id="username"></Input>
            <Input tipo="password" etichetta="Password" id="password"></Input>
            <input type="submit" value="submit" />
        </form>
    )
}
