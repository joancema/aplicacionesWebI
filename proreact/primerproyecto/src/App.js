import React from 'react';
import logo from './logo.svg';
import './App.css';

//importar componentes
import MiComponente from './componentes/MiComponente'

function holaMundo(texto,edad)
{
  var presentacion=
  <div>
   <h2>Hola como estas {texto}</h2>
    <h3>Tengo {edad} anios</h3>
   </div>

  return presentacion
}

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {holaMundo('joancema',35)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React


          <section className="componentes">
            <MiComponente/>
          </section>

        </a>
      </header>
    </div>
  );
}

export default App;
