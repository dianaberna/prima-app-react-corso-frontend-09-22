export function Figlio(props){
    console.log("sono nel figlio")
    let a = 23

    return (
        <>
            <p>sono il filgio</p>
            <p>saluto= {props.saluto}</p>
        </>
    )
}

export function FiglioConClick(props){
    console.log("sono nel figlio con click")
    let a = 23

    return (
        <>
            <p>sono il filgio con click</p>
            <p>saluto= {props.saluto}</p>
            <button onClick={props.onClick()} value={a}>cliccami</button>
        </>
    )
}

