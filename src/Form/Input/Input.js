import "./Input.css"

export default function Input( props ){
    return(
        <>
            <label htmlFor={props.id}>{props.etichetta}</label>
            <input type={props.tipo} placeholder={props.children} id={props.id} onChange={props.onChange} defaultValue={props.value}/>
        </>
    )
}