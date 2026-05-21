import models.User;

public class App {
    public static void main(String[] args) {
        User u = new User( "Juan", 30, "555-1234", 1);
        System.out.println("Funciona");
        System.out.println(u.getNombre());
        System.out.println(u.getEdad());
        System.out.println(u.getTelefono());
        System.out.println(u.getId()); 
        u.setNombre("Pedro");
        u.setEdad(25);
        System.out.println(u.getNombre() + " " + u.getEdad());
    }
}
