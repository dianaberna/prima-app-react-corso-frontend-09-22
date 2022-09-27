import { useState } from "react";

export default function NotToDo(){

    const [task, setTask] = useState("");
    const [lista, setLista] = useState([]);

    const checkAndPass = (event) => {
       event.preventDefault();

       let nuovalista = [...lista, task]
       setLista(nuovalista)
    }
    
    const handleNameChange = (e) =>{
        console.log(e.target.value)
        setTask(e.target.value)
    } 

    return(
        <div>
            <h1>To Do List (file unico) <span>({lista.length})</span></h1>
            <form onSubmit={checkAndPass}>
                <label htmlFor="nome">Nome:</label>
                <input value={task} type="text" id="nome" placeholder="Enter a Name" onChange={handleNameChange}/>
                <button type="submit" value="submit">Submit</button>
            </form>
            {lista.map((elem, i) => (<li key={i}>{elem}</li>) )}
        </div>
    );
}