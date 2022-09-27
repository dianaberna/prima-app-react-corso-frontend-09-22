export default function InputText(props){
    let costrutto = "";

    if(props.tipo=="inpt"){
        costrutto = 
        <div>
            <label htmlFor={props.labelFor}>{props.labelText}</label>
            <input value={props.fvalue} type={props.inputType} id={props.inputId} placeholder={props.inputPH} onChange={props.onChange}/>
        </div>
    }else{
        costrutto = 
        <div>
            <label htmlFor={props.labelFor}>{props.labelText}</label>
            <textarea rows={props.inputRows} placeholder={props.inputPH} onChange={props.onChange}/>
        </div>
    }

    return(
        <>
        {costrutto}
        </>
    );
}