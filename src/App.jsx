import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TiposBasicos } from './JavaScript/TiposBasicos'
import { ObjetosLiterales } from './JavaScript/ObjetosLiterales'
import Checkbox from './Components/Checkbox'
import { Contador } from './Components/Contador'
import { ContadorHook } from './Components/ContadorHook'
import { Usuarios } from './Components/Usuarios'
import { Login } from './Components/Login'
import { Formularios } from './Components/Formularios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr/>
      {<Formularios></Formularios>}
      <hr/>
      {<Login></Login>}
      <hr/>
      {<TiposBasicos></TiposBasicos>}
      <hr/>
      {<ObjetosLiterales></ObjetosLiterales>}
      <hr/>
      {<Checkbox></Checkbox>}
      <hr/>
      {<Contador></Contador>}
      <hr/>
      {<ContadorHook></ContadorHook>}
      <hr/>
      {<Usuarios></Usuarios>}
    </>
  )
}

export default App
