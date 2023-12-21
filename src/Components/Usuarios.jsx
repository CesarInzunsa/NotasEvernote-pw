import { useUsuarios } from "./hooks/useUsuarios";

export const Usuarios = () => {
    // Hook use usuarios
    const { usuarios, ficFnPaginaAnterior, ficFnPaginaSiguiente } = useUsuarios();

    const renderItem = (usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={usuario.avatar}
                        alt={usuario.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    >
                    </img>
                </td>
                <td>
                    {usuario.first_name} {usuario.last_name}
                </td>
                <td>
                    {usuario.email}
                </td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={ficFnPaginaAnterior}>
                    Anterior
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ficFnPaginaSiguiente}>
                    Siguiente
            </button>
        </>
    )
}