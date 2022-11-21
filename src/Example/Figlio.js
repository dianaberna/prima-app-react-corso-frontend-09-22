export function Figlio(props) {
  /*     console.log("sono nel figlio") */
  let a = 23

  return (
    <>
      <p>sono il figlio</p>
      <p>saluto= {props.saluto}</p>
    </>
  )
}

export function FiglioConClick({ saluto, handleClick }) {
  /*     console.log("sono nel figlio con click") */
  let a = 23

  return (
    <>
      <p>sono il figlio con click</p>
      <p>saluto= {saluto}</p>
      <button onClick={handleClick} value={a}>
        cliccami
      </button>
    </>
  )
}

export function FiglioConClick2({ saluto, handleClick }) {
  /*     console.log("sono nel figlio con click") */
  let a = 23

  return (
    <>
      <p>sono il figlio con click</p>
      <p>saluto= {saluto}</p>
      <button onClick={() => handleClick(a)}>cliccami</button>
    </>
  )
}
