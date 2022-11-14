const express = require("express");
const CroutesProductos = require("../controllers/route_productos");
const app = express.Router();

//listar productos
app.get("/Productos", CroutesProductos.listarProductos);

//Agregar
app.post("/addProductos", CroutesProductos.addProductos);

//Editar
// app.get("/editProductos", CroutesProductos.editProducto);
// app.post("/edit_Productos", CroutesProductos.editProducto);

// //Eliminar
// app.get("/deleteProductos", CroutesProductos.deleteProductos);
module.exports = app;
// app.get("/", function (req, res) {
//     res.send("hello world");
//   });
