import { useState } from "react";
import { Usuario_Datos } from "../Base_Nombres/Usuarios";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const encontrado = Usuario_Datos.find(
      (u) => u.usuario === usuario && u.password === password
    );

    if (!encontrado) {
      setError("Usuario o contraseña incorrectos");
      return;
    }

    setError("");
    onLogin({ usuario: encontrado.usuario, rol: encontrado.rol });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="text-center mb-3">
          <h2 className="fw-bold text-primary">Bienvenido</h2>
          <p className="text-muted">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Usuario</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
        </div>

        <p className="text-center text-muted small mt-3 mb-0">
          TecNM · ITS de los Ríos, Tabasco
        </p>
      </div>
    </div>
  );
}

export default Login;