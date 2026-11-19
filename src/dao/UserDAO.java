package dao;

import database.Conexion;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDate;
import models.User;

public class UserDAO {

    // Convertir LocalDate a java.sql.Date controlando valores nulos
    private Date convertirFecha(LocalDate fecha) {
        return (fecha != null) ? Date.valueOf(fecha) : null;
    }

    // Registrar un usuario nuevo en la base de datos
    // Retorna el ID generado por MySQL, o -1 si no se pudo registrar
    public int registrar(User usuario) {

        String sql = "INSERT INTO usuario " +
                     "(nombre_u, fecha_nacimiento, telefono, nivel_estudio) " +
                     "VALUES (?, ?, ?, ?)";

        try (Connection conexion = Conexion.conectar()) {

            if (conexion == null) {
                return -1;
            }

            // Preparar la consulta para recuperar el ID generado por MySQL
            try (PreparedStatement consulta =
                    conexion.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

                // Asignar los datos del objeto User a los parámetros de la consulta
                consulta.setString(1, usuario.getNombre());
                consulta.setDate(2, convertirFecha(usuario.getFechaNacimiento()));
                consulta.setString(3, usuario.getTelefono());
                consulta.setString(4, usuario.getNivelEducativo());

                // Ejecutar la consulta y obtener la cantidad de filas afectadas
                int filasAfectadas = consulta.executeUpdate();

                // Recuperar el ID generado automáticamente por MySQL
                if (filasAfectadas > 0) {

                    try (ResultSet claves = consulta.getGeneratedKeys()) {

                        if (claves.next()) {
                            return claves.getInt(1);
                        }
                    }
                }

                // Retornar -1 si no se insertó el registro o no se obtuvo el ID
                return -1;
            }

        } catch (SQLException e) {

            System.out.println("Error al registrar usuario: " + e.getMessage());
            e.printStackTrace();

            return -1;
        }
    }

    // Buscar un usuario por su ID
    public User buscarPorId(int id) {

        String sql = "SELECT id, nombre_u, fecha_nacimiento, telefono, " +
                     "fecha_registro, nivel_estudio " +
                     "FROM usuario WHERE id = ?";

        try (Connection conexion = Conexion.conectar()) {

            if (conexion == null) {
                return null;
            }

            try (PreparedStatement consulta = conexion.prepareStatement(sql)) {

                // Asignar el ID al parámetro de búsqueda
                consulta.setInt(1, id);

                // Ejecutar la consulta y almacenar los resultados
                try (ResultSet resultado = consulta.executeQuery()) {

                    // Comprobar si se encontró un usuario
                    if (resultado.next()) {

                        // Recuperar las fechas controlando posibles valores nulos
                        Date fechaNac = resultado.getDate("fecha_nacimiento");
                        Timestamp fechaReg = resultado.getTimestamp("fecha_registro");

                        // Crear un objeto User con los datos recuperados de MySQL
                        User usuario = new User(
                            resultado.getInt("id"),
                            resultado.getString("nombre_u"),
                            (fechaNac != null) ? fechaNac.toLocalDate() : null,
                            resultado.getString("telefono"),
                            (fechaReg != null)
                                ? fechaReg.toLocalDateTime().toLocalDate()
                                : null,
                            resultado.getString("nivel_estudio")
                        );

                        return usuario;
                    }
                }
            }

        } catch (SQLException e) {

            System.out.println("Error al buscar usuario: " + e.getMessage());
            e.printStackTrace();
        }

        // Retornar null si no se encontró el usuario
        return null;
    }

    // Actualizar los datos de un usuario existente
    public boolean actualizar(User usuario) {

        String sql = "UPDATE usuario SET " +
                     "nombre_u = ?, " +
                     "fecha_nacimiento = ?, " +
                     "telefono = ?, " +
                     "nivel_estudio = ? " +
                     "WHERE id = ?";

        try (Connection conexion = Conexion.conectar()) {

            if (conexion == null) {
                return false;
            }

            try (PreparedStatement consulta = conexion.prepareStatement(sql)) {

                // Asignar los nuevos datos del usuario a los parámetros
                consulta.setString(1, usuario.getNombre());
                consulta.setDate(2, convertirFecha(usuario.getFechaNacimiento()));
                consulta.setString(3, usuario.getTelefono());
                consulta.setString(4, usuario.getNivelEducativo());
                consulta.setInt(5, usuario.getId());

                // Ejecutar la actualización
                int filasAfectadas = consulta.executeUpdate();

                return filasAfectadas > 0;
            }

        } catch (SQLException e) {

            System.out.println("Error al actualizar usuario: " + e.getMessage());
            e.printStackTrace();

            return false;
        }
    }

    // Eliminar un usuario de la base de datos por su ID
    public boolean eliminar(int id) {

        String sql = "DELETE FROM usuario WHERE id = ?";

        try (Connection conexion = Conexion.conectar()) {

            if (conexion == null) {
                return false;
            }

            try (PreparedStatement consulta = conexion.prepareStatement(sql)) {

                // Asignar el ID del usuario que se desea eliminar
                consulta.setInt(1, id);

                // Ejecutar la eliminación
                int filasAfectadas = consulta.executeUpdate();

                return filasAfectadas > 0;
            }

        } catch (SQLException e) {

            System.out.println("Error al eliminar usuario: " + e.getMessage());
            e.printStackTrace();

            return false;
        }
    }
}