import { useReducer, useEffect } from "react"

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                username,
                nombre,
            }
            break;
        default:
            return state;
            break;
    }
};

export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 3000);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Antonio',
                nombre: 'Isidro'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout',
        })
    }

    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alertInfo_Div">
                    Validando Información...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
                (state.token) ?
                    (
                        <div className="alertSuccess_Div">
                            Autenticado como: {state.nombre}
                            <br />
                            <button name="logout_Button" className="btn btn-outline-primary" onClick={logout}>
                                Logout
                            </button>
                        </div >
                    ) : (
                        <div className="alertDanger_Div">
                            No Autenticado...
                            <br />
                            <button name="login_Button" className="btn btn-primary" onClick={login}>
                                Login
                            </button>
                        </div>
                    )
            }
        </>
    )
}