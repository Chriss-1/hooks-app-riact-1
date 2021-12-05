import React, { useEffect, createContext, useState } from "react";

// Crear el contexto de los articulos
export const ArticulosContext = createContext({});

// base de datos
const informacion = {
    articulos: [
      {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
      {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
      {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
      {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
      {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
    ],
    carrito: [
    ]
  };

export const ArticulosContextProvider = (props) => {

    // Obtener los valores iniciales para el contexto
    const [data, setData] = useState(informacion);

    useEffect(() =>{
        setData(informacion)
    },[])

    // Función para agregar un producto al carrito 
    const agregarAlCarro = (producto) => {
        // 1- Verificar si el producto clickeado ya està en el carrito
        if (data.carrito.find(x => x.id === producto.id)) {
          // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
          const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
          data.carrito = carritoCopia
          setData({...data})
          return
        }
        data.carrito.push({...producto, cantidad: 1})
        setData({...data})
      };

    // Función para eliminar el producto del carrito
    const eliminarProducto = (id) => {
        // filtramos la data para no agregar el producto que eliminanos
        const carritoCopia = data.carrito.filter(x => x.id !== id)
            data.carrito = carritoCopia
            setData({...data})
            return
    };

    // Función para agregar un nuevo articulo para mostrar
    const agregarArticulo = (name,price,img) => {

      // asignacion de variable
      const id = data.articulos.length + 1
      const nombre = name.current.value
      const precio = parseInt(price.current.value)
      const imagen = img.current.value

      // Agregamos a la data el nuevo articulo
      data.articulos.push({id,nombre,precio,imagen})
      console.log(data.articulos);
      setData({...data})
      return
    }

    // Obtener la cantidad de producto en el carrito para la burbuja
    let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0);


    // Objeto del contexto
    const articulosContext = {
        data,
        cantidad,
        agregarAlCarro,
        eliminarProducto,
        agregarArticulo
    };

    // Pasar los valores al proveedor y retornarlo
    return(
        <ArticulosContext.Provider value={articulosContext}>
            {props.children}
        </ArticulosContext.Provider>
    )
}