import { useRef } from "react";
import { Span, Container, Formulario, Titulo, Datos, Imagen, Boton, Input } from './styles'
import { ArticulosContext } from "../../contex/contex";
import React, { useContext } from "react";

export const AgregarArticulo = () =>{
    const articulosContext = useContext(ArticulosContext)
    const {agregarArticulo} = articulosContext

    const name = useRef()
    const price = useRef()
    const img = useRef()

    return(
        <Container>
            <Formulario>
                <Titulo>
                    Agregar un nuevo articulo
                </Titulo>
                <Datos>
                    <Input ref={name} type="text" placeholder="Nombre"/>
                    <Input ref={price} type="number" placeholder="Precio"/>
                </Datos>
                <Span>Ingresar url de la imagen</Span>
                <Imagen>
                    <Input ref={img} type="url" accept="image/png, .jpeg, .jpg, image/gif"/>
                </Imagen>
                <Boton onClick={() => agregarArticulo(name,price,img)}>
                    
                    Agregar
                </Boton>
            </Formulario>
        </Container>
    )
}