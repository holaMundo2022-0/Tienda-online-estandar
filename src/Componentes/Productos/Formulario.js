import React, { useState } from "react";
import ReactDom from "react-dom";
import { useForm } from "react-hook-form";

export const Formulario = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="productos">
      <h1 className="title"> Formulario de ingreso de productos </h1>
      <form onSubmit={handleSubmit()}>
        <div>
          <label className="label">Producto</label>
          <input
            className="in"
            {...register("elemento", { required: true, maxLength: 10 })}
            type="text"
            {...register("elemento", { required: true, maxLength: 5 })}
          />
        </div>

        <div>
          <label className="label">Precio</label>
          <input
            className="in"
            type="text"
            {...register("precio", { required: true, maxLength: 5 })}
          />
        </div>
        <div>
          <label className="label">Cantidad</label>
          <input
            className="in"
            type="text"
            {...register("cantidad", { required: true, maxLength: 5 })}
          />
        </div>
        <div>
          <label className="label">Clasificación</label>
          <select className="in" {...register("clasificacion")}>
            <option value="1"> Verdura</option>
            <option value="2"> Fruta</option>
          </select>
        </div>

        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

// export function AddProducts() {
//   const [nombre, setNombre] = useState();

//   return (
//     <>
//       <h2>Formulario de entreda de productos</h2>
//       <form>
//         <label type="text" id="nombre">
//           Nombre del producto{" "}
//         </label>
//         <input placeholder="Yuca" />

//         <label type="text" id="precio">
//           Precio
//         </label>
//         <input placeholder="Yuca" />

//         <label type="text" id="cantidad">
//           Cantidad{" "}
//         </label>
//         <input placeholder="Yuca" />

//         <div className="">
//           <button type="button">cancelar</button>
//           <button type="submit">Añadir</button>
//         </div>
//       </form>
//     </>
//   );
// }
