import React, { useState, useEffect, createContext } from "react";
import Data from "../Data.js";
import DataVenta from "../DataVenta.js";
import { useAuth0 } from "@auth0/auth0-react";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [ventas, setVentas] = useState([]);
  const [modal, setModal] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const [addProduct, setAddProduct] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const venta = DataVenta.items;
    if (venta) {
      setVentas(venta);
    } else {
      setVentas([]);
    }
  }, []);

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProductos(producto);
    } else {
      setProductos([]);
    }
  }, []);

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto ya se ha añadido al carrito");
    }
  };

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  /* información del usuario */
  // useEffect(() => {
  //   const dataUsuario = JSON.parse(localStorage.getItem("dataUser"));
  //   if (dataUsuario) {
  //     setUsuario(dataUsuario);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("dataUser", JSON.stringify(user));
  // }, [user]);

  /*   Información del ususario */

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.stock;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
    ventas: [ventas],
    modal: [modal, setModal],
    addProduct: [addProduct, setAddProduct],
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
