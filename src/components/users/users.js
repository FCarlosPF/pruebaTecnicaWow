import React, { useState, useEffect } from "react";
import "./users.css";
import Spinner from "../statics/Spinner";
import Navegation from "../navegation/Navegation";

function Users() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Función asíncrona para obtener los usuarios
    const fetchUsers = async () => {
      try {
        const delay = new Promise((resolve) => setTimeout(resolve, 1000));
        await delay;

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="error">Hubo un error: {error}</div>;
  }

  return (
    <>
      <div className="Users">
        <Navegation />
        <h2 className="user-title">Lista de Usuarios</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <h3>{user.name}</h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Dirección:</strong> {user.address.street},{" "}
                {user.address.suite}, {user.address.city},{" "}
                {user.address.zipcode}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
