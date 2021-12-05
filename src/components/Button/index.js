import {Boton} from './styles'
import {ArticulosContext} from '../../contex/contex'
import React, { useContext } from "react";

export const Button = ({children, prod}) => {

    // Obtenemos del contexto lo que necesitamos
    const articulosContext = useContext(ArticulosContext)
    const {agregarAlCarro} = articulosContext

    return (
        <Boton onClick={() => agregarAlCarro(prod)}>{children}</Boton>
    )
}
