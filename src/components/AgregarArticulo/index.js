import { useRef } from "react";
import { Span, Container, Formulario, Titulo, Datos, Imagen, Boton, Input } from './styles'
import { ArticulosContext } from "../../contex/contex";
import React, { useContext } from "react";

export const AgregarArticulo = () =>{

    // Obtenemos del contexto lo que necesitamos
    const articulosContext = useContext(ArticulosContext)
    const {agregarArticulo} = articulosContext

    // Asignamos referencias para poder enviar los datos a agregarArticulo
    const name = useRef()
    const price = useRef()
    const img = useRef()

    // Funcion que espera el evento click del boton para
    // llamar a la funcion agregarArticulo
    const handleAgregarArticulo = (name,price,img) =>{
        agregarArticulo(name,price,img)
        name.current.value = ""
        price.current.value = ""
        img.current.value = ""
    }

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
                <Boton onClick={() => handleAgregarArticulo(name,price,img)}>
                    Agregar
                </Boton>
            </Formulario>
        </Container>
    )
}