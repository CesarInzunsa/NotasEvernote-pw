import reqRespApi from "../../api/reqRes";
import { useState, useRef, useEffect } from "react";

export const useUsuarios = () => {
    const ficRefPage = useRef(0);

    useEffect(() => {
        //FIC: llamar función de carga de usuarios.
        ficFnCargaUsuarios();
    }, [])

    const [usuarios, setUsuarios] = useState([]);

    const ficFnCargaUsuarios = async () => {
        //const ficResponse = await
            //FIC: llamado de la API
            reqRespApi.get('/users', {
                params: {
                    page: ficRefPage.current
                }
            })
                .then(resp => {
                    if (resp.data.data.length > 0) {
                        setUsuarios(resp.data.data);
                    }
                    else {
                        alert('No hay mas registros');
                    }
                })
                .catch(err => console.log(err))
    }

    const ficFnPaginaSiguiente = ()  => {
        ficRefPage.current ++;
        ficFnCargaUsuarios();
    }
    const ficFnPaginaAnterior = () => {
        if ( ficRefPage.current > 0 ){
            ficRefPage.current --;
            ficFnCargaUsuarios();
        }  
    }

    return {
        usuarios,
        //ficFnCargaUsuarios
        ficFnPaginaAnterior,
        ficFnPaginaSiguiente
    }
}