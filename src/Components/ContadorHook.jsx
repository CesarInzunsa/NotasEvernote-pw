import React from 'react'
import { useCounter } from './hooks/useCounter';
export const ContadorHook = () => {
    // Desestructuracion del useCounter
    const {valor, acumular} = useCounter(100);

    // Componente de React
    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
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