import { useState } from "react";
import Mensaje from "./Mensaje";

const nuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    // console.log("Enviando formulario");
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto válido");
    } else {
      console.log("Si es un presupuesto valido");
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default nuevoPresupuesto;
