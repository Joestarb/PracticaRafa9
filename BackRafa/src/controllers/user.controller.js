import { conexion } from "../index.js";

export const getUsuarios = async (req, res) => {
    conexion.query('SELECT * FROM user', (err, results) => {
        if (err) {
          console.error('Error al obtener usuarios:', err);
          res.status(500).json({ error: 'Error al obtener usuarios' });
          return;
        }
        res.status(200).json(results);
      });
};

export const getUsuario = async (req, res) => {
    const userId = req.params.id;
    conexion.query('SELECT * FROM user WHERE idUser = ?', [userId], (err, results) => {
      if (err) {
        console.error('Error al obtener usuario:', err);
        res.status(500).json({ error: 'Error al obtener usuario' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ message: 'Usuario no encontrado' });
      } else {
        res.status(200).json(results[0]);
      }
    });
};

export const createUsuario = async (req, res) => {
    const { nombre, contrasenia, estatus, perfil, telefono, infoAdicional } = req.body;
    conexion.query(
      'INSERT INTO user (nombre, contrasenia, estatus, perfil, telefono, infoAdicional) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, contrasenia, estatus, perfil, telefono, infoAdicional],
      (err, results) => {
        if (err) {
          console.error('Error al crear usuario:', err);
          res.status(500).json({ error: 'Error al crear usuario' });
          return;
        }
        res.status(201).json({ message: 'Usuario creado con éxito', id: results.insertId });
      }
    );
};

export const deleteUsuario = async (req, res) => {
    const userId = req.params.id;
    conexion.query('DELETE FROM user WHERE idUser = ?', [userId], (err, results) => {
    if (err) {
      console.error('Error al eliminar usuario:', err);
      res.status(500).json({ error: 'Error al eliminar usuario' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).json({ message: 'Usuario eliminado con éxito' });
    }
  });
};

export const updateUsuario = async (req, res) => {
    const userId = req.params.id;
  const { nombre, contrasenia, estatus, perfil, telefono, infoAdicional } = req.body;
  conexion.query(
    'UPDATE user SET nombre = ?, contrasenia = ?, estatus = ?, perfil = ?, telefono = ?, infoAdicional = ? WHERE idUser = ?',
    [nombre, contrasenia, estatus, perfil, telefono, infoAdicional, userId],
    (err, results) => {
      if (err) {
        console.error('Error al actualizar usuario:', err);
        res.status(500).json({ error: 'Error al actualizar usuario' });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Usuario no encontrado' });
      } else {
        res.status(200).json({ message: 'Usuario actualizado con éxito' });
      }
    }
  );
};