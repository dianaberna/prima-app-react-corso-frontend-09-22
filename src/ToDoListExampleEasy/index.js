import InputText from "./InputText";

import React, { useState } from "react";

export default function NotToDo(){

    const [task, setTask] = useState("");
    const [lista, setLista] = useState([]);

    const checkAndPass = (event) => {
       event.preventDefault();

       let nuovalista = [...lista, task]
       setLista(nuovalista)

       console.log(lista.map(elemento => elemento));
    }
    
    const handleNameChange = (e) =>{
        console.log(e.target.value)
        setTask(e.target.value)
    } 

    return(
        <div>
            <div>Lista in un unico file</div> 
            <hr />
            <form onSubmit={checkAndPass}>
                <InputText onChange={handleNameChange} value={task} tipo="inpt" labelFor="nome" labelText="Nome:" inputId="nome" inputPH="Enter a Name"/>
                <button type="submit" value="submit">Submit</button>
            </form>
            {lista.map((elem, index) => {return (<li key={index}>{elem}</li>)} )}
            
            <hr />
        </div>
    );
}