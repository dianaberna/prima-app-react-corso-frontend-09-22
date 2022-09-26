import Button from "../Button"
import Input from "../Input/Input"
import Form from "../Form/Form"
import ButtonLoader from "../ButtonLoader/ButtonLoader"

export default function Main(){
    let numero = 10 
    let array = []
    for (let i = 1; i < numero; i++) {
        array.push(<Button key={i}>{i}</Button>)
    }
    return (
        <div>
            sono il main
            <br/>
            <Button type="secondary">testo del bottone</Button>
            <ButtonLoader>Invia</ButtonLoader>
            <Form/>
            <h2>stampo {numero} bottoni</h2>
            {array}
        </div>
    )
}