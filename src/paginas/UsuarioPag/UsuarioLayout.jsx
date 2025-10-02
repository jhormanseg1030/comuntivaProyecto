import { Link, Outlet } from "react-router-dom";

export default function UsuarioLayout() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Gestión de Usuarios</h2>
      <nav className="mb-4">
        <Link to="listarUsu" className="btn btn-outline-primary me-2">
          Listar
        </Link>
        <Link to="crearUsu" className="btn btn-outline-success">
          Crear
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
