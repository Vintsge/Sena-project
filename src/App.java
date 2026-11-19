
import dao.UserDAO;
import database.Conexion;
import java.sql.Connection;
import java.time.LocalDate;
import models.User;

public class App {

    public static void main(String[] args) {

        UserDAO userDAO = new UserDAO();

        // Comprobar la conexión con MySQL
        System.out.println("Probando conexion a MySQL...");

        try (Connection conexion = Conexion.conectar()) {

            if (conexion != null) {
                System.out.println("Conexion exitosa a MySQL.");
            } else {
                System.out.println("No se pudo establecer la conexion.");
                return;
            }

        } catch (Exception e) {
            System.out.println("Error en la conexion: " + e.getMessage());
            e.printStackTrace();
            return;
        }

        // Registrar un usuario nuevo
        System.out.println("\nRegistrando usuario...");

        User nuevoUsuario = new User(
            "Carlos",
            LocalDate.of(2000, 5, 15),
            "3001234567",
            "Universitario"
        );

        // Guardar el usuario y recuperar el ID generado por MySQL
        int idGenerado = userDAO.registrar(nuevoUsuario);

        if (idGenerado != -1) {
            System.out.println("Usuario registrado correctamente.");
            System.out.println("ID generado: " + idGenerado);
        } else {
            System.out.println("No se pudo registrar el usuario.");
            return;
        }

        // Buscar el usuario registrado por su ID
        System.out.println("\nBuscando usuario...");

        User usuarioEncontrado = userDAO.buscarPorId(idGenerado);

        if (usuarioEncontrado != null) {

            System.out.println("Usuario encontrado:");
            System.out.println("ID: " + usuarioEncontrado.getId());
            System.out.println("Nombre: " + usuarioEncontrado.getNombre());
            System.out.println("Fecha de nacimiento: " + usuarioEncontrado.getFechaNacimiento());
            System.out.println("Telefono: " + usuarioEncontrado.getTelefono());
            System.out.println("Fecha de registro: " + usuarioEncontrado.getFechaRegistro());
            System.out.println("Nivel educativo: " + usuarioEncontrado.getNivelEducativo());

        } else {
            System.out.println("No se encontro el usuario.");
            return;
        }

        // Actualizar los datos del usuario
        System.out.println("\nActualizando usuario...");

        usuarioEncontrado.setNombre("Carlos Actualizado");
        usuarioEncontrado.setTelefono("3119876543");
        usuarioEncontrado.setNivelEducativo("Tecnologico");

        boolean actualizado = userDAO.actualizar(usuarioEncontrado);

        if (actualizado) {
            System.out.println("Usuario actualizado correctamente.");
        } else {
            System.out.println("No se pudo actualizar el usuario.");
        }

        // Consultar nuevamente para comprobar los cambios
        System.out.println("\nConsultando datos actualizados...");

        User usuarioActualizado = userDAO.buscarPorId(idGenerado);

        if (usuarioActualizado != null) {

            System.out.println("Datos actuales del usuario:");
            System.out.println("ID: " + usuarioActualizado.getId());
            System.out.println("Nombre: " + usuarioActualizado.getNombre());
            System.out.println("Telefono: " + usuarioActualizado.getTelefono());
            System.out.println("Nivel educativo: " + usuarioActualizado.getNivelEducativo());

        } else {
            System.out.println("No se encontro el usuario.");
        }

        // Eliminar el usuario de prueba
        System.out.println("\nEliminando usuario...");

        boolean eliminado = userDAO.eliminar(idGenerado);

        if (eliminado) {
            System.out.println("Usuario eliminado correctamente.");
        } else {
            System.out.println("No se pudo eliminar el usuario.");
        }
    }
}
