import {Container} from './styles'
import {ArticulosContext} from '../../contex/contex'
import React, { useContext } from "react";

export const Burbuja = () => {
    const articulosContext = useContext(ArticulosContext)
    const {cantidad} = articulosContext

    return (
        <Container>
            {cantidad > 9 ? '9+' : cantidad}
        </Container>
    )   
}