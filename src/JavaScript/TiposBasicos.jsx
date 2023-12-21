import React from 'react'
export const TiposBasicos = () => {
    let FicIdNombre = "Frank"
    FicIdNombre = 706;
    FicIdNombre = "Frank"

    // Constantes
    const FicNombre = "Francisco"
    const FicApellidos = "Ibarra Carlos"
    const FicNumControl = 706
    const FicNumControl2 = 1074
    const FicFehcaReg = new Date()

    // Variables
    let FicExperiencia = 20
    let FicActivo = true

    FicExperiencia = 25

    // Arreglos
    //let FicPasatiempos = ['futbol', 'squash', 'leer', 'series y peliculas'];
    let FicLibros = []
    FicLibros.push(706);
    FicLibros.push(true);
    FicLibros.push('El principito');

    return (
        <>
            <h3>TIPOS BASICOS</h3>
            Alias: {FicIdNombre},<br></br>
            Nombre: {FicNombre},<br></br>
            Apellidos: {FicApellidos},<br></br>
            No. Control: {FicNumControl},<br></br>
            No. Control 2: {FicNumControl2},<br></br>
            Fecha de registro: {FicFehcaReg.toString()},<br></br>
            Años de experiencia: {FicExperiencia},<br></br>
            Estatus: {(FicActivo) ? 'Activo' : 'No Activo'},<br></br>
            Estatus: {(FicActivo) ? 'Activo' : 'No Activo'},<br></br>
            Libros: {FicLibros[0]},
            {(FicLibros[1]) ? 'Activo' : 'No Activo'},
            {FicLibros[2]}
        </>
    )
}