import Button from "../Button"
import Input from "../Input/Input"
import Form from "../Form/Form"
import ButtonLoader from "../ButtonLoader/ButtonLoader"

export default function Main(){
    return (
        <div>
            sono il main
            
            <br/>
            <Button type="secondary">testo del bottone</Button>
            <ButtonLoader>Invia</ButtonLoader>
            <Form/>
        </div>
    )
}