export default function Card(){
    return (
        <div>
            <Titolo valore="prova"/>
            <Titolo valore="1"/>
            <h2>ciao io sono una card</h2>
            <Testo/>
            <Testo>
                <strong>---CIAO sono il testo del componente!!!!---</strong>
            </Testo>
            
        </div>
    )
}

function Titolo(props){
    return (
        <h1>sono il primo titolo {props.valore}</h1>
    )
}

function Testo({children}){
    return (
      <p>ciao sono il primo componente : {children}</p>
    )
}