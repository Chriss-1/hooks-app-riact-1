import { useRef } from "react";

export const AgregarArticulo = () =>{
    const id = useRef()
    const nombre = useRef()
    const precio = useRef()
    const img = useRef()

    return(
        <div>
            <div>
                <input ref={nombre} type="text" placeholder="Nombre"/>
                <input ref={precio} type="number" placeholder="Precio"/>
                <input ref={img} type="file"/>
            </div>
            <button>
                agregar
            </button>
        </div>
    )
}