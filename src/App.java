import models.User;
import java.time.LocalDate;

public class App {
public static void main(String[] args) {

    User u = new User(
        1,
        "Juan",
        LocalDate.of(2005, 3, 10),
        "555-1234",
        LocalDate.of(2026, 11, 4),
        "Universitario"
    );

    System.out.println("Funciona");

    System.out.println("ID: " + u.getId());
    System.out.println("Nombre: " + u.getNombre());
    System.out.println("Fecha de nacimiento: " + u.getFechaNacimiento());
    System.out.println("Telefono: " + u.getTelefono());
    System.out.println("Fecha de registro: " + u.getFechaRegistro());
    System.out.println("Nivel educativo: " + u.getNivelEducativo());

    // Modificar atributos
    u.setNombre("Pedro");
    u.setTelefono("3001234567");
    u.setNivelEducativo("Tecnico");

    System.out.println("\nDatos actualizados:");
    System.out.println(u.getNombre());
    System.out.println(u.getTelefono());
    System.out.println(u.getNivelEducativo());
}}