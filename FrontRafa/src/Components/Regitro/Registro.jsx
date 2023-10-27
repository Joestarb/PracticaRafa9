import React, { useState } from 'react';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Realiza la lógica de registro aquí, por ejemplo, una llamada a una API

    // Almacena los datos de sesión en localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', 'true');

    // Redirige al usuario a la página de inicio después del registro
    window.location.href = '/';
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={handleRegistration} className="bg-blue-500 text-white p-2 rounded">
        Registrarse
      </button>
    </div>
  );
};

export default Registro;