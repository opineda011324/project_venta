import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [mostrarSubBotton, setmostrarSubButton] = useState(false);

  const abriSubButton = () => {
    setmostrarSubButton(!mostrarSubBotton);
  };

  const cerrarSubButton = () => {
    setmostrarSubButton(false);
  };

  return (
    <nav className="nav">
      <div className="nav-item">
        <button className="nav-button" onClick={abriSubButton}>Productos</button>
        {mostrarSubBotton && (
          <div className="dropdown" onClick={cerrarSubButton}>
            <ul>
              <li>Producto 1</li>
              <li>Producto 2</li>
              <li>Producto 3</li>
            </ul>
          </div>
        )}
      </div>
      <button className="nav-button">Ropa</button>
      <button className="nav-button">Inicia sesión</button>
    </nav>
  );
};

export default Nav;
