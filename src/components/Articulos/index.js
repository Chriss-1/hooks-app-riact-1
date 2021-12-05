import { Articulo } from "../Articulo";
import { Container } from './styles'
import { ArticulosContext } from "../../contex/contex";
import React, { useContext } from "react";
import { AgregarArticulo } from '../AgregarArticulo'

export const Articulos = () => {
    const articulosContext = useContext(ArticulosContext)
    const {data} = articulosContext
    
    return (
        <Container>
            <AgregarArticulo />
            {
                data.articulos.map(prod => 
                    <Articulo key={prod.id} prod={prod}/>
                )
            }
        </Container>
    )
}