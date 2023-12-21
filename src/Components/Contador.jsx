import React from 'react'
import { useState } from 'react'
export const Contador = () => {
    // Valores del contador de Click's
    const [valor, setValor] = useState(0);

    // Función suma de Click's
    const acumular = (numeroClicks) => {
        setValor(valor + numeroClicks);
    }

    // Componente de React
    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button className='FicButtonAdd'
                onClick={() => acumular(1)}>Sumar (+1)
            </button>
            &nbsp;
            <button className='FicButtonSub'
                onClick={() => acumular(-1)}> Restar (-1)
            </button>
        </div>
    )
}