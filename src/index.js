import React from 'react';
import ReactDOM from 'react-dom/client';
import Genitore from './Genitore'
import Layout from './Layout/Layout'
import Button from './Button';
import ButtonWithLoader from './ButtonWithLoader/ButtonWithLoader'
import ListCard from './ListCard/ListCard'
import Form from './Form/Form'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>App React</h1>
    <h2>Layout (concetti: function component)</h2>
    <details>
      <summary>Mostra componente Layout</summary>
      <Layout/>
    </details>
    <h2>Comunicazione Genitore/Figlio (concetti: props e children)</h2>
    <details>
      <summary>Mostra componente Genitore</summary>
      <Genitore />
    </details>
    <h2>Lista di card (concetti: map, for e stampe multiple)</h2>
    <details>
      <summary>Mostra componente ListCard</summary>
      <ListCard/>
    </details>
    <h2>Button & ButtonWithLoader (concetti: render condizionato e setState)</h2>
    <details>
      <summary>Mostra componente Button e ButtonWithLoader</summary>
      <Button variante="primary">sono un bottone primary</Button>
      <Button variante="secondary">sono un bottone secondary</Button>
      <Button variante="outline">sono un bottone outline</Button>
      <ButtonWithLoader/>
      <ButtonWithLoader/>
      <ButtonWithLoader/>
    </details>
    <h2>Form (concetti: setState e handle di eventi)</h2>
    <details>
      <summary>Mostra componente Form</summary>
      <Form/>
    </details>
  </React.StrictMode>
);
