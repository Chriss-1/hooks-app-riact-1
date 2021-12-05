import { Burbuja } from '../Burbuja'
import { Container, Boton, Lista, UL, LI} from './styles'
import swal from 'sweetalert'
import {ArticulosContext} from '../../contex/contex'
import React, { useContext } from "react";

export const Carro = () => {
    const articulosContext = useContext(ArticulosContext)
    const {eliminarProducto,data,cantidad} = articulosContext

    const handleDelete = (id) => {
        swal({
            title:"Eliminar articulo",
            text: "¿Está seguro de eliminar el artículo del carrito de compra?",
            buttons: ["No","Si"]
        }).then(respuesta=>{
            if(respuesta){
                eliminarProducto(id)
            }
        })
    }

    let subTotal = data.carrito.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <Container>
            <Burbuja cantidad={cantidad} />
            <Boton>
                Carro
            </Boton>
            {
                cantidad > 0 ? 
                    <Lista>
                        <UL>
                        {
                            data.carrito.map(x => {
                                return (
                                    <LI>
                                        <img height={25} alt={x.nombre} src={x.imagen} />
                                        <span>{x.nombre}</span>
                                        <span>{x.cantidad}</span>
                                        <button onClick={() => handleDelete(x.id)}>Eliminar</button>
                                    </LI>
                                )
                            })
                        }
                        <LI>
                            <strong>Sub total</strong>
                            <strong>${subTotal.toLocaleString()}</strong>
                        </LI>
                        <LI>
                            <strong>Impuesto</strong>
                            <strong>${impto.toLocaleString()}</strong>
                        </LI>
                        <LI>
                            <strong>Total a pagar</strong>
                            <strong>${totalPagar.toLocaleString()}</strong>
                        </LI>
                    </UL>
                </Lista> : null
            }
        </Container>

    )
}