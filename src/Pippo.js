
export default function Pippo() {
  return(
    <div>
      ciao diana !!!
      <PrimoComponente/>
      <PrimoComponente>
        <p>ciao sono il testo del componente!!!!</p>
      </PrimoComponente>
    </div>
  )
}


function PrimoComponente(){
  return (
    <p>ciao sono il primo componente</p>
  )
}

