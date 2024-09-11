import "./Navegation.css";
import { Link } from "react-router-dom";
const Navegation = () => {
  return (
    <div className="navegation">
      <Link to="../todos">Todos</Link>
      <Link to="../users">Usuarios</Link>
    </div>
  );
};

export default Navegation;
