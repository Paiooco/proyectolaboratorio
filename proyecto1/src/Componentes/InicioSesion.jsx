//evelin  pestaña 1 
 

import { useState } from "react";
import bcrypt from "bcryptjs";
import { Usuario_Datos } from "../Base_Nombres/Usuarios";

function InicioSesion({ entrar }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!user || !pass) return setError("Llena todos los campos");

    const cuenta = Usuario_Datos.find(u => u.usuario === user);
    
    // Comparamos la contraseña escrita con la encriptada
    if (cuenta && bcrypt.compareSync(pass, cuenta.passwordEncriptada)) {
      entrar(); // Le avisamos a App.jsx que ya entró
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Instituto Tecnológico de los Ríos</h3>
        <h5 className="text-center mb-4">Inicio de Sesión</h5>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Ingresar Usuario:</label>
            <input type="text" className="form-control" onChange={e => setUser(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Ingresar Contraseña:</label>
            <input type="password" className="form-control" onChange={e => setPass(e.target.value)} />
          </div>
          {error && <div className="alert alert-danger p-2 text-center">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}
export default InicioSesion;