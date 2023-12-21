import { useState } from "react";

export const useCounter = (inicial = 10) => {
    // Valores del contador de Click's
    const [valor, setValor] = useState(inicial);

    // Función suma de Click's
    const acumular = (numeroClicks) => {
        setValor(valor + numeroClicks);
    }

    return { valor, acumular }

}