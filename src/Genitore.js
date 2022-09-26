export default function Genitore(){
    let a = 200
    
    return (
        <div >
            <h2>prima chiamata del figlio1</h2>
            <Figlio1 />
            <h2>seconda chiamata del figlio1</h2>
            <Figlio1 valore={a} titolo="ciao"/>
            <h2>terza chiamata del figlio1</h2>
            <Figlio1 valore="10"/>
            <Figlio1>ciao</Figlio1>

            <hr/>

            <Figlio2/>

            <Figlio2>
                <p>ciao</p>
            </Figlio2>

            <hr/>

            <Figlio3/>

            <Figlio3 testo="ciao">
                <strong>testo</strong>
                <strong>testo</strong>
                <strong>testo</strong>
            </Figlio3>
            <hr/>
        </div>
    )
}

function Figlio1( props ){

    return (
        <div id="sono il paragrafo">
            <p>sono il paragrafo </p>
            <p>il valore è {props.valore} </p>
            <p>il titolo è {props.titolo}</p>
        </div>
    )
}

function Figlio2( {children} ){
    return (
      <div>sono il paragrago 2: {children}</div>
    )
}

function Figlio3( props ){
    return (
      <p>ciao sono il primo componente : {props.children} -- {props.testo}</p>
    )
}
