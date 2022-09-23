import "./Genitore.css"

export default function Genitore(){
    let a = 200
    return (
        <div id="prova">
            <hr/>

            <Figlio1 valore={a} titolo="ciao"/>

            <hr/>

            <Figlio2/>

            <Figlio2>
                <p>ciao</p>
            </Figlio2>

            <hr/>

            <Figlio3/>

            <Figlio3 prova="ciao">
                <strong>testo</strong>
            </Figlio3>
            <hr/>
        </div>
    )
}

function Figlio1(props){
    return (
        <p id="sono il paragrafo">
            sono il paragrafo 
            <p>il valore è {props.valore} </p>
            <p>il titolo è {props.titolo}</p>
        </p>
    )
}

function Figlio2( {children} ){
    return (
      <p>sono il paragrago 2: {children}</p>
    )
}

function Figlio3( props ){
    return (
      <p>ciao sono il primo componente : {props.children} -- {props.prova}</p>
    )
}
