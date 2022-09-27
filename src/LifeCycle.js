import React, { useEffect, useState } from 'react';

function LifecycleDemo() {
  useEffect(() => {
    // Viene chiamato ad ogni render del componente
    console.log('render!');
    return () => console.log('unmounting...');
  })

  return "I'm a lifecycle demo";
}

export default function LifeCycle() {
  // salviamo uno stato per tenerlo sotto controllo nello useeffect
  const [random, setRandom] = useState(Math.random());

  const [mounted, setMounted] = useState(true);

  // funzione che crea un numero random e lo assegna allo stato così da far scattare lo useeffect
  const reRender = () => setRandom(Math.random());

  // questa funzione smonta e rimonta il componente LyfeCycle 
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
    </>
  );
}

