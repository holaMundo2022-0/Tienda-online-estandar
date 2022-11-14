// const express = require("    express");
const Productos = require("../models/productos.model");
// Modelo BD

//Conexión Base de datos
const pool = require("../settings/db");

let listarProductos = async (req, res) => {
  //   res.send("Hola desde app");
  const model = await Productos.find();

  Productos.countDocuments({}, (err, total) => {
    if (err) {
      return res.json({
        status: 400,
        mensaje: "Error al leer el archivo",
        err,
      });
    }
    res.json({
      status: 200,
      total,
      model,
    });

    console.log(model);
  });
};

let addProductos = async (req, res) => {
  const { title, price, image, category, stock, cantidad } = req.body;
  const producto = await new Productos({
    title,
    price,
    image,
    category,
    stock,
    cantidad,
  });
  producto.save((err, data) => {
    if (err) {
      return res.json({
        status: 200,
        mensaje: "error al cargar un producto",
        err,
      });
    }
  });
  res.send("listo");
};

// let editProductos = async (req, res) => {
//   let id = req.params._id;
//   const producto = await Productos.findById(id);
//   res.render("/editProducto", { producto });
// };

// //edit producto post
// let edit_Productos = async (req, res) => {
//   let id = req.params;
//   const { title, price, image, category, stock, cantidad } = req.body;
//   const edit_Producto = {
//     title,
//     price,
//     image,
//     category,
//     stock,
//     cantidad,
//   };
//   const producto = Productos.updateOne({_id: id }, edit_Producto);
//   res.redirect("/Productos");
// };

// //Eliminar
// let deleteProductos = async (req, res) => {
//   let id = req.params;
//   await Productos.findOneAndDelete({ _id: id });
//   res.redirect("/Productos");
// };

module.exports = {
  listarProductos,
  addProductos,
  // editProductos,
  // edit_Productos,
};

// let listarProductos = async (req, res) => {
//   //   res.send("Hola desde app");
//   const model = await Productos.find();

//   Productos.countDocuments({}, (err, total) => {
//     if (err) {
//       return res.json({
//         status: 400,
//         mensaje: "Error al leer el archivo",
//         err,
//       });
//     }
//     res.render("index", { model });

//     console.log(model);
//   });
// };
