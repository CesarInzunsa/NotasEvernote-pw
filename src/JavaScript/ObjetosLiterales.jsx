import React from 'react'
export const ObjetosLiterales = () => {
    const persona = {
        nombreCompleto: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle: 'Conocido No. 533',
            numero: 533
        }
    };

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {/* Una sola linea: {JSON.stringify(persona)},<br /> */}
                    PERSONA JSON: {JSON.stringify(persona,null,1)}
                </pre>
            </code>
        </div>
    )
}