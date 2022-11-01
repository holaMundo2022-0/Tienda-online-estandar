import "./App.css";
import React from "react";
import { Header } from "./Componentes/Header/indexH";
import { ListaProductos } from "./Componentes/Productos/indexP";
import "boxicons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from "./Componentes/Inicio/indexI";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./Componentes/Carrito/indexC";
import { ProductoDetalles } from "./Componentes/Productos/ProductoDetalles";
import { ListaVentas } from "./Componentes/Ventas/indexV";
import { Profile } from "./Componentes/Login/Profile";
import { Formulario } from "./Componentes/Productos/Formulario";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Productos" element={<ListaProductos />} />
            <Route path="/Productos/${id}" element={<ProductoDetalles />} />
            <Route path="/Ventas" element={<ListaVentas />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/AddProducts" element={<Formulario />} />
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
